using Microsoft.AspNetCore.Mvc;

namespace Warehouse.ViewComponents;

public record SelectorOption(string Text, string Value, bool Selected = false);

public record SelectorViewModel(string Title, bool HasSearch, SelectorOption[] Options, int SelectedIndex = -1);

public class SelectorViewComponent : ViewComponent
{
    public IViewComponentResult Invoke(SelectorViewModel model)
    {
        SelectorOption? selectedOption = model.Options.FirstOrDefault(option => option.Selected);
        int selectedIndex = selectedOption != null ? Array.IndexOf(model.Options, selectedOption) : model.SelectedIndex;
        return View(model with { SelectedIndex = selectedIndex });
    }
}