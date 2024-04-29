using Microsoft.AspNetCore.Mvc;

namespace Warehouse.ViewComponents;

public record Navbar(string Page);

public class NavbarViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(Navbar options)
    {
        return View((object)options);
    }
}