/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Un vendedor de vestidos ofrece 3 diferentes tallas, con diferentes precios, la grande con un precio
de $500 por vestido, la mediana con un costo de $400 y la chica de $300. Selecciona la talla a comprar
y solicita el número de vestidos que desee, Posteriormente, calculo el monto final.*/

function calcularTotal() {
    var marca = parseInt(document.getElementById("marca").value);
    var cantidad = parseFloat(document.getElementById("cantidad").value);
    var total = 0;
    
    if (marca === 1) {
        total = cantidad * 5000;
    } else if (marca === 2) {
        total = cantidad * 400;
    } else if (marca === 3) {
        total = cantidad * 300;
    }
    
    var resultado = document.getElementById("totalResultado");
    resultado.textContent = "Monto total de la venta: $" + total;
}

