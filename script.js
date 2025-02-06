document.addEventListener("DOMContentLoaded", () => {
    // Modo Claro/Oscuro
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Animación al hacer hover en el menú
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => item.style.transform = "scale(1.2)");
        item.addEventListener("mouseleave", () => item.style.transform = "scale(1)");
    });
});
