using Serilog;
using Warehouse.Data.Models;

namespace Warehouse.SQL;

public class PurchaseOrderManagedDatabase() : ManagedDatabase
{
    internal static void Initialize()
    {
        Log.Debug("Initializing the purchase order managed database.");
        Instance.CreateIfNotExists(typeof(PurchaseOrderModel), "purchase_order");
    }
}