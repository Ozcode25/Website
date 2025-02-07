// script.js

// Cambiar color de fondo
document.getElementById('cambiarColor').addEventListener('click', function() {
    const colores = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ffccff'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});

// Contador de clics
let contador = 0;
document.getElementById('cambiarColor').addEventListener('click', function() {
    contador++;
    document.getElementById('contador').textContent = contador;
});

// Validación de formulario
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        document.getElementById('mensajeFormulario').textContent = 'Formulario enviado correctamente.';
        document.getElementById('mensajeFormulario').style.color = 'green';
    } else {
        document.getElementById('mensajeFormulario').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('mensajeFormulario').style.color = 'red';
    }
});
