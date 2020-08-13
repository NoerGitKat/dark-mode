// Enable Dark Mode Styles
function toggleDarkMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";

  // Change text and icon
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";

  const classToRemove = isDark ? "fa-sun" : "fa-moon";
  const classToAdd = isDark ? "fa-moon" : "fa-sun";

  toggleIcon.children[1].classList.replace(classToRemove, classToAdd);

  // Change images to dark
  image1.src = `img/undraw_proud_coder_${isDark ? "dark" : "light"}.svg`;
  image2.src = `img/undraw_feeling_proud_${isDark ? "dark" : "light"}.svg`;
  image3.src = `img/undraw_conceptual_idea_${isDark ? "dark" : "light"}.svg`;
}
