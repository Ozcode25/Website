document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Alternar modo oscuro/claro
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Menú móvil
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
