using Microsoft.AspNetCore.Mvc;

namespace Warehouse.Controllers.Views;

public record ErrorViewModel(int Code, string? Message);

public class ErrorController : Controller
{
    [Route("/error/{code:int}")]
    public IActionResult Index([FromRoute] int code, [FromQuery] string? message = null)
    {
        ViewData["title"] = $"Error {code}";
        return View("Error", new ErrorViewModel(code, message));
    }
}