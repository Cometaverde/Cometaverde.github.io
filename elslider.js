const images = document.querySelectorAll('.slider-img');
let counter = 0;

function nextSlide() {
    images[counter].style.display = 'none'; // Ocultar la imagen actual
    counter = (counter + 1) % images.length; // Obtener el índice de la siguiente imagen
    images[counter].style.display = 'block'; // Mostrar la siguiente imagen
}

function prevSlide() {
    images[counter].style.display = 'none'; // Ocultar la imagen actual
    counter = (counter - 1 + images.length) % images.length; // Obtener el índice de la imagen anterior
    images[counter].style.display = 'block'; // Mostrar la imagen anterior
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

setInterval(nextSlide, 2000); // Cambiar automáticamente las imágenes cada 3 segundos