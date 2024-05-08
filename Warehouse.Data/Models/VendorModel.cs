namespace Warehouse.Data.Models;

public struct VendorModel(string name, params ContactModel[] contacts)
{
    public string Id { get; set; }
    public string Name { get; set; } = name;
    public DateTime Created { get; set; } = DateTime.Now;
    public ContactModel[] Contacts { get; set; } = contacts;
}