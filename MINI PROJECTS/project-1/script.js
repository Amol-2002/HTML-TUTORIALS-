// ===== Header Scroll Effect =====
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== Input Placeholder Animation =====
const input = document.querySelector("main input");
input.addEventListener("focus", () => {
  input.placeholder = "Type your favorite food...";
});
input.addEventListener("blur", () => {
  input.placeholder = "Search for Restaurant, cuisine or a dish";
});

// ===== Fade-in On Load =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("main img").style.animation = "zoomIn 1.2s ease-in-out";
  document.querySelector("main p").style.animation = "fadeIn 1s ease-in-out 0.4s forwards";
  document.querySelector("main input").style.animation = "fadeInUp 1s ease-in-out 0.8s forwards";
});

// ===== Logo Hover Pulse =====
const logo = document.querySelector(".logo img");
logo.addEventListener("mouseenter", () => {
  logo.style.transition = "transform 0.4s ease";
  logo.style.transform = "scale(1.15)";
});
logo.addEventListener("mouseleave", () => {
  logo.style.transform = "scale(1)";
});
