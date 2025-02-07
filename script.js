document.addEventListener("DOMContentLoaded", () => {
  // Alternar tema claro/oscuro
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Toggle para menú en móviles
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  // Opcional: Efecto hover en el menú (para escritorio)
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach(item => {
    item.addEventListener("mouseover", () => item.style.transform = "scale(1.1)");
    item.addEventListener("mouseleave", () => item.style.transform = "scale(1)");
  });
});
