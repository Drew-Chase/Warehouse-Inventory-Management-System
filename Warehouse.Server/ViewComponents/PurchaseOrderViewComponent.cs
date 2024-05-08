using Microsoft.AspNetCore.Mvc;
using Warehouse.Data.Models;

namespace Warehouse.ViewComponents;

public class PurchaseOrderViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(PurchaseOrderModel model)
    {
        return View(model);
    }
}