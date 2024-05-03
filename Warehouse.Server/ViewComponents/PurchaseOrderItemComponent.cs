using Microsoft.AspNetCore.Mvc;

namespace Warehouse.ViewComponents;

public class PurchaseOrderItemComponent:ViewComponent
{
    public IViewComponentResult Invoke()
    {
        return View();
    }
}