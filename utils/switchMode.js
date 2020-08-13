// Switch Theme Dynamically
function switchMode(event) {
  if (event.target.checked) {
    // If checked set theme to dark on highest level DOM element
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
  toggleDarkMode(event.target.checked);
}
