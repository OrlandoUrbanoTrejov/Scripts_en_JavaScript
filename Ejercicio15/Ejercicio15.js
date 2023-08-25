/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Calcular el descuento de un medicamento */

function calcularDescuento() {
    var precio = parseFloat(document.getElementById("precio").value);
    var total = precio - (precio * 0.35);
    var nombre = document.getElementById("nombre").value;
    
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Cliente " + nombre + ", el total a pagar es de: $" + total.toFixed(2);
}

