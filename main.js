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

// ===== SLIDER =====
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let slideInterval;

// Создаём точки
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dots span");

function updateSlider() {
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateSlider();
  resetAutoplay();
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Автоплей
function startAutoplay() {
  slideInterval = setInterval(nextSlide, 5000);
}
function resetAutoplay() {
  clearInterval(slideInterval);
  startAutoplay();
}
startAutoplay();