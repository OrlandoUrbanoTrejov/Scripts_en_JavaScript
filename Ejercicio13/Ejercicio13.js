/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Calcula el precio de un boleto de viaje, tomando en cuenta el numero de kilometros que se van a recorrer.
 * El precio por kilometro es de $20.50 */

function calcularPrecio() {
    var precio = 20.50;
    var kilometros = parseFloat(document.getElementById("kilometros").value);
    var total = precio * kilometros;
    
    var resultadoP = document.getElementById("resultado");
    resultadoP.textContent = "El precio del boleto es de: $" + total;
}

