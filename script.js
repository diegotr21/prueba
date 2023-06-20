/* Mensaje de alerta */
function showAlert() {
    alert("Hola, esta es una alerta desde JavaScript");
}

/* Este código selecciona el elemento de formulario HTML con el ID "myForm" y le agrega un detector de
eventos. El detector de eventos escucha el evento "enviar", que se activa cuando el usuario envía el formulario. Cuando se activa el evento, se llama a la función "validateForm()" y se evita el comportamiento de envío de formulario predeterminado mediante "event.preventDefault()". */
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}