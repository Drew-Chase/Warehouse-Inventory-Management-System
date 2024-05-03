using Warehouse.Core.Attributes;

namespace Warehouse.Data.Models;

public struct PurchaseOrderModel
{
    [SqlProperty("id", "BIGINT", true)]
    public long Id { get; set; }
    [SqlProperty("name", "VARCHAR(255)")]
    public string Name { get; set; }
    [SqlProperty("created", "DATETIME")]
    public DateTime Created { get; set; }
    [SqlProperty("vendor", "TEXT")]
    public VendorModel[] Vendor { get; set; }
    [SqlProperty("buyer", "TEXT")]
    public BuyerModel[] Buyer { get; set; }
    [SqlProperty("files", "TEXT")]
    public Guid[] Files { get; set; }
    [SqlProperty("status", "TEXT")]
    public StatusModel[] Status { get; set; }

}