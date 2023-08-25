/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 */
/* Ejercicio:
 * Genera un programa que determine si eres mayor de edad */

function verificarEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    var resultadoElement = document.getElementById("resultado");
    
    if (edad >= 18) {
        resultadoElement.textContent = "Eres mayor de edad";
    } else {
        resultadoElement.textContent = "Eres menor de edad";
    }
}

