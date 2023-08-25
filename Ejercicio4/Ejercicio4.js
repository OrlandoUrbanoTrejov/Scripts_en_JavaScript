/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Se requiere determinar el tiempo en que tarda una persona en llegar de una ciudad a otra en bicicleta, 
 * Considerando que lleva una velocidad constante */

function CalcularTiempo() {
    var km = parseFloat(document.getElementById("km").value);
    var distancia = parseFloat(document.getElementById("distancia").value);

    var resultado = km * distancia;

    document.getElementById("resultado").textContent = "Tiempo: " + resultado + " segundos";
}

