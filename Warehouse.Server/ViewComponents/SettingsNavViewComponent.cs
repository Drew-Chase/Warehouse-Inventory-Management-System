using Microsoft.AspNetCore.Mvc;

namespace Warehouse.ViewComponents;

public record SettingsNav(string Tab);

public class SettingsNavViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(SettingsNav options)
    {
        return View((object)options);
    }
}