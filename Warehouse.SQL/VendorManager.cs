using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Serilog;
using Warehouse.Data.Models;

namespace Warehouse.SQL;

public class VendorManager : DatabaseManager<VendorModel>
{
    public VendorManager()
    {
        TableName = "vendors";
    }

    public static void Init()
    {
        Log.Information("Initializing vendors table in the database.");
        VendorManager manager = new();
        manager.Connection.Open();
        var command = manager.Connection.CreateCommand();
        command.CommandText = $"""
                                 CREATE TABLE IF NOT EXISTS `{manager.TableName}`
                                 (
                                     `id`      int          NOT NULL AUTO_INCREMENT,
                                     `name`    varchar(255) NOT NULL,
                                     `created` datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                     `contacts` json NOT NULL,
                                     primary key (`id`)
                                 );
                               """;

        command.ExecuteNonQuery();
        manager.Connection.Close();
        Log.Debug("Vendors table initialized.");
    }

    public override IEnumerable<VendorModel> Get()
    {
        Connection.Open();

        var command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName}";
        var reader = command.ExecuteReader();
        List<VendorModel> vendors = [];
        while (reader.Read())
        {
            vendors.Add(new VendorModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Created = reader.GetDateTime("created"),
                Contacts = JArray.Parse(reader.GetString("contacts")).ToObject<ContactModel[]>() ?? []
            });
        }

        Connection.Close();
        return vendors;
    }


    public override IEnumerable<VendorModel> Query(string query, string? sort = null, bool ascending = true, int limit = 10, int offset = 0)
    {
        sort ??= "name";
        Connection.Open();
        var command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName} WHERE name LIKE @query ORDER BY '{sort}' {(ascending ? "ASC" : "DESC")} LIMIT {limit} OFFSET {offset}";
        command.Prepare();
        command.Parameters.AddWithValue("@query", $"%{query}%");
        var reader = command.ExecuteReader();
        List<VendorModel> vendors = [];
        while (reader.Read())
        {
            vendors.Add(new VendorModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Created = reader.GetDateTime("created"),
                Contacts = JArray.Parse(reader.GetString("contacts")).ToObject<ContactModel[]>() ?? []
            });
        }

        return vendors;
    }

    public override VendorModel Get(string id)
    {
        if (HashIds.Decode(id) is not { } decoded || decoded.Length == 0) return default; // Invalid ID

        Connection.Open();
        var command = Connection.CreateCommand();
        command.CommandText = $"SELECT * FROM {TableName} WHERE id = @id LIMIT 1";
        command.Prepare();
        command.Parameters.AddWithValue("@id", decoded);
        var reader = command.ExecuteReader();
        VendorModel vendor = default;
        if (reader.Read())
        {
            vendor = new VendorModel
            {
                Id = HashIds.Encode(reader.GetInt32("id")),
                Name = reader.GetString("name"),
                Created = reader.GetDateTime("created"),
                Contacts = JArray.Parse(reader.GetString("contacts")).ToObject<ContactModel[]>() ?? []
            };
        }

        Connection.Close();
        return vendor;
    }

    public override void Add(VendorModel item)
    {
        Connection.Open();
        var command = Connection.CreateCommand();
        command.CommandText = $"INSERT INTO {TableName} (name, contacts) VALUES (@name, @contacts)";
        command.Prepare();
        command.Parameters.AddWithValue("@name", item.Name);
        command.Parameters.AddWithValue("@contacts", JsonConvert.SerializeObject(item.Contacts, Formatting.None));
        command.ExecuteNonQuery();
        Connection.Close();
    }

    public override void Update(VendorModel item)
    {
        if (HashIds.Decode(item.Id) is not { } decoded || decoded.Length == 0) return; // Invalid ID
        Connection.Open();
        var command = Connection.CreateCommand();
        command.CommandText = $"UPDATE {TableName} SET name = @name, contacts = @contacts WHERE id = @id";
        command.Prepare();
        command.Parameters.AddWithValue("@name", item.Name);
        command.Parameters.AddWithValue("@contacts", JsonConvert.SerializeObject(item.Contacts, Formatting.None));
        command.Parameters.AddWithValue("@id", decoded);
        command.ExecuteNonQuery();
        Connection.Close();
    }

    public override void Delete(string id)
    {
        if (HashIds.Decode(id) is not { } decoded || decoded.Length == 0) return; // Invalid ID
        Connection.Open();
        var command = Connection.CreateCommand();
        command.CommandText = $"DELETE FROM {TableName} WHERE id = @id";
        command.Prepare();
        command.Parameters.AddWithValue("@id", decoded);
        command.ExecuteNonQuery();
        Connection.Close();
    }
}