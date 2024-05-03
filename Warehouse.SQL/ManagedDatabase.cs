using System.Data;
using System.Reflection;
using MySql.Data.MySqlClient;
using Serilog;
using Warehouse.Core.Attributes;
using Warehouse.Core.Constants;

namespace Warehouse.SQL;

public class ManagedDatabase
{
    protected static readonly Lazy<ManagedDatabase> _instance = new Lazy<ManagedDatabase>(() => new ManagedDatabase());
    public string TableName { get; protected set; } = "";
    public Type? ModelType { get; protected set; }
    protected MySqlConnection? Connection;

    public static ManagedDatabase Instance => _instance.Value;

    protected ManagedDatabase()
    {
    }


    internal void CreateIfNotExists(Type modelType, string tableName)
    {
        ModelType = modelType;
        TableName = tableName;
        var properties = modelType.GetProperties();
        var query = $"CREATE TABLE IF NOT EXISTS `{tableName}` (";
        foreach (var property in properties)
        {
            SqlPropertyAttribute? attribute = property.GetCustomAttribute<SqlPropertyAttribute>();
            if (attribute is null) continue;

            string sqlName = attribute.Name;
            string type = attribute.Type;
            if (attribute.IsPrimaryKey) type += " PRIMARY KEY";
            query += $"`{sqlName}` {type},";
        }

        ExecuteNonQuery(query.TrimEnd(',') + ");");
    }

    public static void Initialize()
    {
        Log.Debug("Initializing the database manager.");
        DatabaseConfiguration databaseOptions = ApplicationConfiguration.Instance.Database;
        try
        {
            MySqlConnection connection = new($"server={databaseOptions.Host};user={databaseOptions.Username};password={databaseOptions.Password};port={databaseOptions.Port};SslMode={databaseOptions.SslMode};");
            connection.Open();
            MySqlCommand command = connection.CreateCommand();
            command.CommandText = $"CREATE DATABASE IF NOT EXISTS {databaseOptions.Database};";
            command.ExecuteNonQuery();
            connection.Close();
        }
        catch (Exception e)
        {
            Log.Fatal(e, "Failed to initialize the database with the specified connection string: \"server={Host};user={Username};password={Password};port={Port};SslMode={SslMode};\"", databaseOptions.Host, databaseOptions.Username, databaseOptions.Password, databaseOptions.Port, databaseOptions.SslMode);
            Environment.Exit(2);
        }

        PurchaseOrderManagedDatabase.Initialize();
    }

    /// <summary>
    /// Connects to the database.
    /// </summary>
    public virtual void Connect()
    {
        var databaseOptions = ApplicationConfiguration.Instance.Database;
        Connection = new MySqlConnection($"server={databaseOptions.Host};user={databaseOptions.Username};password={databaseOptions.Password};database={databaseOptions.Database};port={databaseOptions.Port};SslMode={databaseOptions.SslMode};");
        Connection.Open();
    }

    /// <summary>
    /// Creates a new database/table in the warehouse.
    /// </summary>
    /// <remarks>
    /// Use this method to create a new database in the warehouse.
    /// </remarks>
    public virtual void Create<T>(T item)
    {
    }

    /// <summary>
    /// Deletes an item from the database with the specified ID.
    /// </summary>
    /// <param name="id">The ID of the item to delete.</param>
    public virtual void Delete(int id)
    {
    }

    /// <summary>
    /// Retrieves objects from the database.
    /// </summary>
    /// <param name="limit">The maximum number of objects to retrieve.</param>
    /// <param name="offset">The number of objects to skip before retrieving.</param>
    /// <returns>An array of objects retrieved from the database.</returns>
    public virtual T[] Get<T>(int limit, int offset)
    {
        return [];
    }

    /// <summary>
    /// Inserts an item into the warehouse database.
    /// </summary>
    /// <param name="item">The item to be inserted.</param>
    public virtual void Insert<T>(T item)
    {
    }

    /// <summary>
    /// Updates an item in the database with the specified ID.
    /// </summary>
    /// <param name="id">The ID of the item to update.</param>
    /// <param name="item">The updated item.</param>
    public virtual void Update<T>(int id, T item)
    {
    }

    /// <summary>
    /// Checks if the warehouse exists in the database.
    /// </summary>
    /// <returns>
    /// Returns true if the warehouse exists in the database; otherwise, false.
    /// </returns>
    public virtual bool Exists()
    {
        return false;
    }

    /// <summary>
    /// Executes a non-query SQL statement on the connected warehouse database.
    /// </summary>
    /// <param name="query">The SQL query to execute.</param>
    protected void ExecuteNonQuery(string query)
    {
        if (Connection is null) Connect();
        if (Connection?.State != ConnectionState.Open)
        {
            if (Connection is null || Connection.IsDisposed)
                Connect();
            else
            {
                try
                {
                    Connection.Open();
                }
                catch (Exception e)
                {
                    Log.Error(e, "Failed to open the connection to the database.");
                    return;
                }
            }
        }

        using var command = new MySqlCommand(query, Connection);
        command.ExecuteNonQuery();
    }

    /// <summary>
    /// Executes a database query and returns the result as an array of objects.
    /// </summary>
    /// <param name="query">The SQL query to execute.</param>
    /// <returns>An array of objects retrieved from the database.</returns>
    protected object[] ExecuteQuery(string query)
    {
        if (Connection is null) Connect();
        if (Connection?.State != ConnectionState.Open)
        {
            if (Connection is null || Connection.IsDisposed)
                Connect();
            else
            {
                try
                {
                    Connection.Open();
                }
                catch (Exception e)
                {
                    Log.Error(e, "Failed to open the connection to the database.");
                    return [];
                }
            }
        }

        using var command = new MySqlCommand(query, Connection);
        using var reader = command.ExecuteReader();
        var results = new List<object>();

        while (reader.Read())
        {
            var result = new object();
            results.Add(result);
        }

        return results.ToArray();
    }
}