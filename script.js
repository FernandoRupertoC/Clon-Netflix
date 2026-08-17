// Selecciona el formulario.
const formulario = document.querySelector("#formularioSuscripcion");

// Selecciona la alerta.
const mensajeExito = document.querySelector("#mensajeExito");

// Detecta cuando se envía el formulario.
formulario.addEventListener("submit", function (evento) {

    // Evita que la página se recargue.
    evento.preventDefault();

    // Hace visible la alerta.
    mensajeExito.classList.remove("d-none");

    // Activa la animación de Bootstrap.
    setTimeout(function () {
        mensajeExito.classList.add("show");
    }, 20);

    // Limpia los campos del formulario.
    formulario.reset();
});

// Detecta cuando se presiona el botón para cerrar la alerta.
mensajeExito
    .querySelector(".btn-close")
    .addEventListener("click", function () {

        // Oculta nuevamente la alerta.
        mensajeExito.classList.remove("show");

        setTimeout(function () {
            mensajeExito.classList.add("d-none");
        }, 150);
    });