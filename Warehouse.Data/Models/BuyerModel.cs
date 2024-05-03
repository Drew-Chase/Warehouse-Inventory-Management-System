namespace Warehouse.Data.Models;

public struct BuyerModel
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public DateTime Created { get; set; }
    public ContactModel[] Contacts { get; set; }
}