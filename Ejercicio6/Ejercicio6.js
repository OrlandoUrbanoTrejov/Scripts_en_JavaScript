/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Se requiere determinar el costo que tendra que realizar una llamada telefonica con base en el tiempo que dura la llamada
 * y el costo por minuto */

function CostoLlamada() {
    var tiempo = parseFloat(document.getElementById("tiempo").value);
    var costo = parseFloat(document.getElementById("costo").value);

    var total = tiempo * costo;

    document.getElementById("total").textContent = "Costo de la llamada: $" + total;
}

