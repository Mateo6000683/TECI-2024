// Espera a que la ventana se cargue completamente
window.onload = function () {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Agrega una clase para la transición del loader
    loader.classList.add('loader-hidden');

    // Muestra el contenido principal después de que el loader se ha ocultado
    setTimeout(() => {
        loader.style.display = 'none'; // Oculta el loader
        mainContent.style.display = 'block'; // Muestra el contenido principal
    }, 1000); // Tiempo de espera para la transición
};
