/* Autor: Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando7@gmail.com
 *
 * Ejercicio:
 * Se desea saber el total de una caja registradora de un almacén, se conoce el numero de billetes y monedas asi como su valor
 */

function calcularTotal() {
    var dineroCantidad = parseFloat(document.getElementById("dineroCantidad").value);
    var dineroDenominaciones = [1000, 500, 200, 100, 50, 20, 5, 2, 1, 0.5, 0.2, 0.1];
    var total = 0;
    
    for(var i = 0; i < dineroDenominaciones.length; i++){
        var cantidadDeDenominacion = Math.floor(dineroCantidad / dineroDenominaciones[i]);
        dineroCantidad -= cantidadDeDenominacion * dineroDenominaciones[i];
        total += cantidadDeDenominacion * dineroDenominaciones[i];
    }
    
    document.getElementById("totalCalculado").textContent = "Total calculado: $" + total;
}

