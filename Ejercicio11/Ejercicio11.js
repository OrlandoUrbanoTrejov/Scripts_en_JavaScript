/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Multiplicar dos numeros */

function calcularMultiplicacion() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    var resultado = numero1 * numero2;

    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}

