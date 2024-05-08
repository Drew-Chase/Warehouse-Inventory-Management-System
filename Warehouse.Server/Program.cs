using System.IO.Compression;
using Serilog;
using Serilog.Events;
using Warehouse.Core.Constants;
using Warehouse.SQL;

namespace Warehouse;

internal static class Program
{
    public static void Main(string[] args)
    {
        ApplicationConfiguration.Instance.Initialize(Files.ApplicationConfiguration);
        ConfigureLogging();
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddSerilog();
        builder.Services.AddMvc(options => { options.EnableEndpointRouting = false; });
        builder.Services.AddRazorPages().WithRazorPagesRoot("/Views").AddViewComponentsAsServices();
        builder.Services.AddServerSideBlazor();

        var app = builder.Build();


        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        else
        {
            app.UseForwardedHeaders();
            app.UseHttpsRedirection();
        }

        app.UseStatusCodePagesWithRedirects("/error/{0}");

        app.UseRouting();
        app.MapControllers();
        app.MapRazorPages();
        app.UseAuthorization();
        app.UseDefaultFiles();
        app.UseStaticFiles();

        AppDomain.CurrentDomain.ProcessExit += (_, _) =>
        {
            ApplicationConfiguration.Instance.Save();

            Log.Debug("Application exiting after {TIME}.", ApplicationData.UpTime);
            Log.CloseAndFlush();
        };

        AppDomain.CurrentDomain.UnhandledException += (_, e) =>
        {
            if (e.ExceptionObject is Exception exception)
            {
                Log.Fatal(exception, "Unhandled exception: {REPORT}", CrashHandler.Report(exception));
            }
        };

        LocationManager.Init();
        VendorManager.Init();

        app.Run($"http://localhost:{ApplicationConfiguration.Instance.Port}");
    }

    private static void ConfigureLogging()
    {
        // Initialize Logging
        string[] logs = Directory.GetFiles(Directories.Logs, "*.log");
        if (logs.Length != 0)
        {
            using ZipArchive archive =
                ZipFile.Open(Path.Combine(Directories.Logs, $"logs-{DateTime.Now:MM-dd-yyyy HH-mm-ss.ffff}.zip"),
                    ZipArchiveMode.Create);
            foreach (string log in logs)
            {
                archive.CreateEntryFromFile(log, Path.GetFileName(log));
                File.Delete(log);
            }
        }

        TimeSpan flushTime = TimeSpan.FromSeconds(30);
        Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Information()
            .WriteTo.Console(
#if DEBUG
                LogEventLevel.Verbose,
#else
                ApplicationConfiguration.Instance.LogLevel,
#endif
                outputTemplate:
                $"[{ApplicationData.ApplicationName}] [{{Timestamp:HH:mm:ss}} {{Level:u3}}] {{Message:lj}}{{NewLine}}{{Exception}}")
            .MinimumLevel.Verbose()
            .WriteTo.File(Files.DebugLog, buffered: true, flushToDiskInterval: flushTime)
            .WriteTo.File(Files.LatestLog, LogEventLevel.Information, buffered: true, flushToDiskInterval: flushTime)
            .WriteTo.File(Files.ErrorLog, LogEventLevel.Error, buffered: false)
            .CreateLogger();
    }
}