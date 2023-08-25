/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 */
/* Ejercicio:
 * Solicita un numero al usuario y calcula su factorial */

function calcularFactorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = 1;
    
    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }
    
    var resultado1 = document.getElementById("resultado");
    resultado1.textContent = "El factorial de " + numero + " es: " + resultado;
}

