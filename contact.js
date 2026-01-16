document.addEventListener("DOMContentLoaded", function () {

    emailjs.init("5kh44NHbLLCFw7gb6");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const empresa = document.getElementById("empresa").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !telefono || !email || !empresa || !mensaje) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, introduzca un correo electrónico válido.");
            return;
        }

        
        const parametrosPlantilla = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            empresa: empresa,
            mensaje: mensaje,
            reply_to: email 
        };

         emailjs.send("service_8ejqh6h", "template_6erphz6", parametrosPlantilla)
            .then(function(response) {
                alert("¡Mensaje enviado con éxito a Keytron!");
                form.reset();
            })
            .catch(function(error) {
                console.error("Error:", error);
                alert("Error al enviar: " + error.text);
            });
    });
});