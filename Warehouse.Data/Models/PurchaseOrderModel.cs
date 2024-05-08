namespace Warehouse.Data.Models;

public struct PurchaseOrderModel
{
    public long Id { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }
    public VendorModel[] Vendor { get; set; }
    public BuyerModel[] Buyer { get; set; }
    public Guid[] Files { get; set; }
    public StatusModel[] Status { get; set; }
    public LocationModel ShippedTo { get; set; }
    public float Price { get; set; }
}