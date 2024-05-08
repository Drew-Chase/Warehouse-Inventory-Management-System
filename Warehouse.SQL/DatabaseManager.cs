using HashidsNet;
using MySql.Data.MySqlClient;
using Warehouse.Core.Constants;
using Warehouse.Data.Models;

namespace Warehouse.SQL;

public class DatabaseManager<T> : IDisposable, IAsyncDisposable
{
    protected readonly MySqlConnection Connection;
    protected string TableName = "locations";
    private bool _disposed = false;
    protected readonly Hashids HashIds;

    protected DatabaseManager()
    {
        HashIds = new Hashids(ApplicationConfiguration.Instance.EncryptionSalt, 6);
        DatabaseConfiguration configuration = ApplicationConfiguration.Instance.Database;
        string connectionString = $"server={configuration.Host};user={configuration.Username};password={configuration.Password};database={configuration.Database};port={configuration.Port};ssl-mode={configuration.SslMode}";
        Connection = new MySqlConnection(connectionString);
    }

    public virtual IEnumerable<T> Range(int limit, int offset)
    {
        return Query("", limit: limit, offset: offset);
    }

    public virtual IEnumerable<T> Query(string query, string? sort = null, bool ascending = true, int limit = 10, int offset = 0)
    {
        return [];
    }

    public virtual IEnumerable<T> Get()
    {
        return [];
    }

    public virtual T? Get(string id)
    {
        return default;
    }

    public virtual void Add(T item)
    {
    }

    public virtual void Update(T item)
    {
    }

    public virtual void Delete(string id)
    {
    }


    protected virtual void Dispose(bool disposing)
    {
        if (!_disposed)
        {
            if (disposing)
            {
                Connection.Dispose();
            }
        }

        _disposed = true;
    }


    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    public async ValueTask DisposeAsync()
    {
        Dispose(false);
        await Connection.DisposeAsync();
        GC.SuppressFinalize(this);
    }
}