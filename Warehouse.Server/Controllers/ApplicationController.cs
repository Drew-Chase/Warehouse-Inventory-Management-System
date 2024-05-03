// LFInteractive LLC. 2021-2024

using Microsoft.AspNetCore.Mvc;
using Warehouse.Core.Constants;
using Warehouse.Data;

namespace Warehouse.Controllers;

[Route("/api")]
[ApiController]
public class ApplicationController : ControllerBase
{
    [HttpGet()]
    public IActionResult Get()
    {
        return Ok(ApplicationData.GenerateApplicationData());
    }
}