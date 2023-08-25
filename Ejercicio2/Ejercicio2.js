/* Autor: Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 */
/* Ejercicio:
 * Realice un algoritmo que calcule el precio total del boleto de una persona, ingresando el precio por kilometro y 
 * la cantidad de kilometros a recorrer. Represente el diagrama de flujo, el pseudocodigo correspondiente
 */
function CalcularPrecioBoleto() {
    var precio = parseFloat(document.getElementById("precio").value);
    var distancia = parseFloat(document.getElementById("distancia").value);
    var precioBoleto = precio * distancia;
    document.getElementById("precioBoleto").textContent = "Precio del boleto: $" + precioBoleto;
}

