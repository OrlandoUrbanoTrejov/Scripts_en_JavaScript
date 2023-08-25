/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio: En la cafetería de Tesji hay una urna con pelotas de colores. verde, roja y amarilla. Cada una aplica
un desucento diferente en el total de tu compra. La pelota verde ofrece un 10% de descuento, la
amarilla un 5% y la roja un 15%. Con base a esos datos, imprime el monto final a pagar, ya con el
descuento. */
function calcularDescuento() {
    var opciones = document.getElementById("opciones");
    var compraInput = document.getElementById("total");
    var resultado1 = document.getElementById("resultado");
    
    var opcion = parseInt(opciones.value);
    var compra = parseFloat(compraInput.value);
    var resultado = 0;

    if (opcion === 1) {
        resultado = compra - (compra * 0.10);
    } else if (opcion === 2) {
        resultado = compra - (compra * 0.05);
    } else if (opcion === 3) {
        resultado = compra - (compra * 0.15);
    } else {
        resultado1.textContent = "Opción no válida";
        return;
    }

    resultado1.textContent = "Monto total: $" + resultado.toFixed(2);
}

