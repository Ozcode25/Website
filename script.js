// script.js
document.getElementById('formularioCita').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Configuración para Formspree (servicio gratuito)
    const formData = new FormData(this);
    
    fetch('https://formspree.io/f/xvojnzqw', { // Reemplaza con tu ID de Formspree
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('mensajeCita').textContent = '¡Cita agendada! Nos pondremos en contacto contigo.';
            document.getElementById('mensajeCita').style.color = 'green';
            this.reset();
        } else {
            throw new Error('Error en el envío');
        }
    })
    .catch(error => {
        document.getElementById('mensajeCita').textContent = 'Error al enviar. Por favor intenta nuevamente.';
        document.getElementById('mensajeCita').style.color = 'red';
    });
});
