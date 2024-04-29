using Microsoft.AspNetCore.Mvc;

namespace Warehouse.ViewComponents;
public record navbar(string Page);
public class NavbarViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(navbar options)
    {
        return View((object)options);
    }
}