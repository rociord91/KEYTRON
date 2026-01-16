(function() {
    // Inicialización de EmailJS con la Public Key corregida para 2026
    emailjs.init({
      publicKey: "_Jy6JBLD2LiXcRE27",
    });
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        // MUY IMPORTANTE: Previene el envío por defecto que causa el Error 405
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const empresa = document.getElementById("empresa").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación básica
        if (!nombre || !telefono || !email || !mensaje) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduzca un correo electrónico válido.");
            return;
        }

        // Parámetros para la plantilla de EmailJS
        const parametrosPlantilla = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            empresa: empresa || "No especificada",
            mensaje: mensaje,
            reply_to: email 
        };

        // Cambiar el texto del botón para feedback visual
        const btn = form.querySelector('input[type="submit"]');
        btn.value = 'Enviando...';
        btn.disabled = true;

        emailjs.send("service_x52lah9", "template_6erphz6", parametrosPlantilla)
            .then(function(response) {
                alert("¡Mensaje enviado con éxito a Keytron!");
                form.reset();
            })
            .catch(function(error) {
                console.error("Error detallado de EmailJS:", error);
                alert("Error al enviar el formulario. Por favor, inténtelo de nuevo más tarde.");
            })
            .finally(function() {
                btn.value = 'enviar';
                btn.disabled = false;
            });
    });
});
