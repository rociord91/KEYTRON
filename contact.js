document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        const nombre = document.getElementById("nombre").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const email = document.getElementById("email").value.trim();
        const empresa = document.getElementById("empresa").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validación básica
        if (!nombre || !telefono || !email || !mensaje) {
            event.preventDefault();
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            event.preventDefault();
            alert("Por favor, introduzca un correo electrónico válido.");
            return;
        }

        const btn = form.querySelector('input[type="submit"]');
        btn.value = 'Enviando...';
        btn.disabled = true;
    });
});
