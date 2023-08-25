/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023 
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Un vendedor a realizado N ventas y desea saber cuantas fueron por 10,000 o menos,
 * cuantas fueron por mas de 10,000 pero por menos de 20,000 y cuanto fue el monto de las ventas de cada una,
 * y el monto global, realice el algoritmo para determinar los totales. */
function agregarVenta() {
    var ventasContainer = document.getElementById("ventasContainer");
    var numVentas = document.getElementById("ventas").value;
    
    ventasContainer.innerHTML = ""; // Limpiar el contenedor
    
    for (var i = 0; i < numVentas; i++) {
        var ventaInput = document.createElement("input");
        ventaInput.type = "number";
        ventaInput.placeholder = "Precio de la venta " + (i + 1);
        ventasContainer.appendChild(ventaInput);
    }
}

function calcularTotales() {
    var ventas = parseInt(document.getElementById("ventas").value);
    var totalFinal = 0;
    var totalMenor1000 = 0;
    
    for (var i = 0; i < ventas; i++) {
        var precio = parseFloat(document.getElementById("ventasContainer").children[i].value);
        
        totalFinal += precio;
        
        if (precio < 1000) {
            totalMenor1000 += precio;
        }
    }
    
    document.getElementById("totalFinal").textContent = "Total final = $" + totalFinal;
    document.getElementById("totalMenor1000").textContent = "Total ventas menores a $1000 = $" + totalMenor1000;
}

document.getElementById("ventas").addEventListener("change", agregarVenta);

