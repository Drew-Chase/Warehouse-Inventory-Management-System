namespace Warehouse.Data.Models;

public struct StatusModel(string name, string description, DateTime? started = null, DateTime? completed = null)
{
    public string Name { get; set; } = name;
    public string Description { get; set; } = description;
    public DateTime? Started { get; set; } = started;
    public DateTime? Completed { get; set; } = completed;
}