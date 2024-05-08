using MySql.Data.MySqlClient;
using Serilog;
using Warehouse.Data.Models;

namespace Warehouse.SQL;

public class LocationManager : DatabaseManager<LocationModel>
{
    public LocationManager()
    {
        TableName = "locations";
    }


    /// <summary>
    /// Initializes the locations table in the database if it does not already exist.
    /// </summary>
    /// <remarks>
    /// This method creates a table named 'locations' in the database with the following columns:
    /// - id: an auto-incrementing integer field
    /// - name: a non-null string field representing the name of the location
    /// - address: a non-null string field representing the address of the location
    /// </remarks>
    public static void Init()
    {
        Log.Information("Initializing locations table in the database.");
        using LocationManager manager = new LocationManager();
        manager.Connection.Open();
        MySqlCommand command = manager.Connection.CreateCommand();
        command.CommandText = $"""
                               CREATE TABLE IF NOT EXISTS `{manager.TableName}`
                               (
                                   `id`      int          NOT NULL AUTO_INCREMENT,
                                   `name`    varchar(255) NOT NULL,
                                   `address` varchar(255) NOT NULL,
                                   primary key (`id`)
                               );
                               """;
        command.ExecuteNonQuery();
        manager.Connection.Close();
        Log.Debug("Locations table initialized.");
    }

    /// <summary>
    /// Retrieves all locations from the database.
    /// </summary>
    /// <returns>An array of LocationModel objects representing the locations.</returns>
    public override IEnumerable<LocationModel> Get()
    {
        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName}";
        MySqlDataReader reader = command.ExecuteReader();
        List<LocationModel> locations = [];
        while (reader.Read())
        {
            locations.Add(new LocationModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Address = reader.GetString("address")
            });
        }

        Connection.Close();
        return locations;
    }

    /// <summary>
    /// Adds a new location to the database.
    /// </summary>
    /// <param name="location">The LocationModel object representing the new location.</param>
    public override void Add(LocationModel location)
    {
        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"INSERT INTO {TableName} (name, address) VALUES ( @name, @address)";
        command.Prepare();
        command.Parameters.AddWithValue("@name", location.Name);
        command.Parameters.AddWithValue("@address", location.Address);
        command.ExecuteNonQuery();
    }

    public override IEnumerable<LocationModel> Query(string query, string? sort = null, bool ascending = true, int limit = 10, int offset = 0)
    {
        sort ??= "name";
        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName} WHERE name LIKE @query OR address LIKE @query ORDER BY {sort} {(ascending ? "ASC" : "DESC")} LIMIT {limit} OFFSET {offset}";
        command.Prepare();
        command.Parameters.AddWithValue("@query", $"%{query}%");
        MySqlDataReader reader = command.ExecuteReader();

        List<LocationModel> locations = [];
        while (reader.Read())
        {
            locations.Add(new LocationModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Address = reader.GetString("address")
            });
        }

        return locations;
    }

    public override LocationModel Get(string id)
    {
        if (HashIds.Decode(id) is not { } decoded || decoded.Length == 0) return default; // Invalid ID

        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName} WHERE id = @id LIMIT 1";
        command.Prepare();
        command.Parameters.AddWithValue("@id", decoded[0]);
        MySqlDataReader reader = command.ExecuteReader();
        LocationModel location = default;
        if (reader.Read())
        {
            location = new LocationModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Address = reader.GetString("address")
            };
        }

        Connection.Close();
        return location;
    }

    public override void Update(LocationModel item)
    {
        if (HashIds.Decode(item.Id) is not { } decoded || decoded.Length == 0) return; // Invalid ID
        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"UPDATE {TableName} SET name = @name, address = @address WHERE id = @id";
        command.Prepare();
        command.Parameters.AddWithValue("@name", item.Name);
        command.Parameters.AddWithValue("@address", item.Address);
        command.Parameters.AddWithValue("@id", decoded);
        command.ExecuteNonQuery();
        Connection.Close();
    }

    public override void Delete(string id)
    {
        if (HashIds.Decode(id) is not { } decoded || decoded.Length == 0) return; // Invalid ID
        Connection.Open();
        MySqlCommand command = Connection.CreateCommand();
        command.CommandText = $"DELETE FROM {TableName} WHERE id = @id";
        command.Prepare();
        command.Parameters.AddWithValue("@id", decoded);
        command.ExecuteNonQuery();
        Connection.Close();
    }
}