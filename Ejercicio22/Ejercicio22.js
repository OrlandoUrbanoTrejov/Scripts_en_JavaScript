/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Un vendedor recibe un sueldo base más un 10% por comision de sus ventas el vendedor desea
saber cuanto dinero obtendra por concepto de comisiones por las 3 ventas que realiza en el mes 
y el total que recibira en el mes tomando en cunta su base y comisiones */

function calcularComision() {
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var ventas = parseInt(document.getElementById("ventas").value);
    
    var comision = 0;
    for (var i = 1; i <= ventas; i++) {
        var precio = parseFloat(prompt("Precio de la venta " + i + ": "));
        comision += precio * 0.10;
    }
    
    var total = comision + sueldo;
    
    document.getElementById("comision").textContent = comision.toFixed(2);
    document.getElementById("total").textContent = total.toFixed(2);
}

