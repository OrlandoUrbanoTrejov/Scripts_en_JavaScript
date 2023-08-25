/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Haciendo uso de arreglos, almacena la calificación de una materia (Recuerda que son 5 unidades). Posteriormente, calcula el promedio final e imprime los resultados.*/

function calcularPromedio() {
    var calificaciones = document.querySelectorAll(".calificacion");
    var suma = 0;

    for (var i = 0; i < calificaciones.length; i++) {
        var calificacion = parseFloat(calificaciones[i].value);
        suma += calificacion;
    }

    var promedio = suma / calificaciones.length;

    var resultado = document.getElementById("promedioResultado");
    resultado.textContent = "Promedio: " + promedio;
}

