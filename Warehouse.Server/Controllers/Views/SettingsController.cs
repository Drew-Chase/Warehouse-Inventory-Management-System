using Microsoft.AspNetCore.Mvc;

namespace Warehouse.Controllers.Views;

[Route("/settings")]
public class SettingsController : Controller
{
    public IActionResult Index()
    {
        ViewData["title"] = "Settings";
        return View();
    }

    [Route("account")]
    public IActionResult Account()
    {
        ViewData["title"] = "Account Settings";
        return View();
    }
}