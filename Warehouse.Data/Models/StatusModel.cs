namespace Warehouse.Data.Models;

public enum Status
{
    All,
    ManifestReceived,
    Shipping,
    Processing,
    Completed
}

public struct StatusModel(Status status, string notes, float progress, DateTime? started = null, DateTime? completed = null)
{
    public Status Status { get; set; } = status;
    public string Notes { get; set; } = notes;
    public float Progress { get; set; } = progress;
    public DateTime? Started { get; set; } = started;
    public DateTime? Completed { get; set; } = completed;
}