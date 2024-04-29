using Microsoft.AspNetCore.Mvc;

namespace Warehouse.Controllers.Views;

[Route("/")]
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [Route("purchases")]
    public IActionResult Purchases()
    {
        ViewData["title"] = "Purchases";
        return View();
    }

    [Route("inventory")]
    public IActionResult Inventory()
    {
        ViewData["title"] = "Inventory";
        return View();
    }

    [Route("vendors")]
    public IActionResult Vendors()
    {
        ViewData["title"] = "Vendors";
        return View();
    }
}