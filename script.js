// Select DOM elements
const toggleSwitch = document.querySelector('input[name="dark-mode-switch"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Check localStorage for theme and toggle switch
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme == "dark") {
    toggleSwitch.checked = true;
    toggleDarkMode(true);
  }
}

// Switch mode on checkbox change
toggleSwitch.addEventListener("change", switchMode);
