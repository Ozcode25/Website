document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el salto instantáneo

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste para el header fijo
                    behavior: "smooth" // Hace el desplazamiento suave
                });
            }

            // Resaltar la pestaña activa
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
