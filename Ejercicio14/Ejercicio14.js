/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Calcula la cantidad de euros a monedas */

function realizarConversion() {
    var dolar = 16.89;
    var euro = 0.0053;
    var opcion = parseInt(document.getElementById("opcion").value);
    var dinero = parseFloat(document.getElementById("dinero").value);
    var total = 0;
    
    var resultado = document.getElementById("resultado");
    
    if (opcion === 1) {
        total = dinero * dolar;
        resultado.textContent = "Dinero: " + total.toFixed(2) + " dólares";
    } else if (opcion === 2) {
        total = dinero * euro;
        resultado.textContent = "Dinero: " + total.toFixed(2) + " euros";
    } else {
        resultado.textContent = "Opción no válida";
    }
}

