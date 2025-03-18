// Función para alternar la visibilidad del contenido adicional
function toggleContent(event) {
    const content = event.target.parentNode.querySelector('.more-content');
    const link = event.target;
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        link.textContent = 'Leer menos'; // Cambiamos el texto del enlace
    } else {
        content.style.display = 'none';
        link.textContent = 'Leer más'; // Restauramos el texto del enlace
    }
}
