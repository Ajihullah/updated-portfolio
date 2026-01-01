const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const body = document.body;

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    body.classList.remove("menu-open");
  }
});
