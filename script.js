document.addEventListener("DOMContentLoaded", () => {
  // Alternar tema claro/oscuro
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // (Opcional) Efecto de hover en el menú
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach(item => {
    item.addEventListener("mouseover", () => item.style.transform = "scale(1.1)");
    item.addEventListener("mouseleave", () => item.style.transform = "scale(1)");
  });
});
