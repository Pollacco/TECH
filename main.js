// Бургер
const burger = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

// Подменю
document.querySelectorAll(".mobile_has_sub").forEach(item => {
  const btn = item.querySelector(".mobile_parent");
  btn.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});