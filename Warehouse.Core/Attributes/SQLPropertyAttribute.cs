namespace Warehouse.Core.Attributes;

public class SqlPropertyAttribute(string name, string type, bool primaryKey = false) : Attribute
{
    public string Name { get; set; } = name;
    public string Type { get; set; } = type;
    public bool IsPrimaryKey { get; set; } = primaryKey;
}