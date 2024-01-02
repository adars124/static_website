const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("is-active");
});