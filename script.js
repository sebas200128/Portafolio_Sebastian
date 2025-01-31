// src/main/resources/static/script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Aquí podrías agregar la lógica para enviar el formulario a un servidor

        // Muestra el mensaje de éxito
        successMessage.style.display = 'block';

        // Limpia el formulario
        contactForm.reset();

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });
});