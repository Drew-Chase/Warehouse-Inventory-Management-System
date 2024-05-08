using Microsoft.AspNetCore.Mvc;
using Warehouse.Data.Models;
using Warehouse.SQL;

namespace Warehouse.Controllers.Views;

public record PurchasesFilters(Status OrderStatus, LocationModel[] Locations, VendorModel[] Vendors, int Product, DateTime DateFrom, DateTime DateTo, string Query, int View, string Sort, bool Ascending);

[Route("/")]
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [Route("purchases")]
    public IActionResult Purchases(Status orderStatus = Status.All, string locations = "", string vendors = "", int product = 0, DateTime? dateFrom = null, DateTime? dateTo = null, string query = "", int view = 0, string sort = "date", bool ascending = true)
    {
        ViewData["title"] = "Purchases";

        // Get locations from the database
        LocationManager manager = new LocationManager();
        string[] locationIds = locations.Split(',');
        LocationModel[] remoteLocations = manager.Get().Where(i => locationIds.Contains(i.Id)).ToArray();

        // Get vendors from the database
        VendorManager vendorManager = new VendorManager();
        string[] vendorIds = vendors.Split(',');
        VendorModel[] remoteVendors = vendorManager.Get().Where(i => vendorIds.Contains(i.Id)).ToArray();


        return View(new PurchasesFilters(orderStatus, remoteLocations, remoteVendors, product, dateFrom ?? DateTime.MinValue, dateTo ?? DateTime.MaxValue, query, view, sort, ascending));
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