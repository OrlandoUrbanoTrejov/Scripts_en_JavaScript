/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Escriba un algoritmo que dada la cantidad de monedas de 5-10-20 pesos, diga la cantidad de dinero que se tiene en total */
var cajero = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50];
function calcularTotal() {
    var total = 0;
    
    for (var i = 0; i < cajero.length; i++) {
        var cantidad = parseFloat(document.getElementById("cantidad" + i).value);
        total += cantidad * cajero[i];
    }
    
    document.getElementById("total").textContent = total.toFixed(2);
}

var cajeroContainer = document.getElementById("cajeroContainer");

for (var i = 0; i < cajero.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = `
        <label>Cantidad de $${cajero[i]} que tienes:</label>
        <input type="number" id="cantidad${i}" step="any"><br>
    `;
    cajeroContainer.appendChild(div);
}

var totalButton = document.createElement("button");
totalButton.textContent = "Calcular Total";
totalButton.onclick = calcularTotal;
cajeroContainer.appendChild(totalButton);

