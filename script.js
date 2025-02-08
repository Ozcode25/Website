// Ejemplo: Mostrar mensaje en consola al hacer clic en botones o enlaces
document.querySelectorAll('button, a').forEach(element => {
  element.addEventListener('click', () => {
    console.log('Elemento de acción clickeado!');
  });
});
