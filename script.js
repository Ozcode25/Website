// script.js

// Validación del formulario de cita
document.getElementById('formularioCita').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && telefono && fecha && mensaje) {
        document.getElementById('mensajeCita').textContent = 'Cita agendada correctamente. Nos pondremos en contacto contigo pronto.';
        document.getElementById('mensajeCita').style.color = 'green';
    } else {
        document.getElementById('mensajeCita').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('mensajeCita').style.color = 'red';
    }
});
