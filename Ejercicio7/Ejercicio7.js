/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Realice un algoritmo para leer calificaciones de N alumnos y determine el numero de alumnos 
 * aprobados y reprobados */
function ingresarCalificaciones() {
    var cantidadAlumnos = parseInt(document.getElementById("cantidadAlumnos").value);
    var calificacionesContainer = document.getElementById("calificacionesContainer");
    
    calificacionesContainer.innerHTML = ""; // Limpiar calificaciones anteriores
    
    for (var i = 0; i < cantidadAlumnos; i++) {
        var calificacionInput = document.createElement("input");
        calificacionInput.type = "number";
        calificacionInput.placeholder = "Calificación del alumno " + (i+1);
        calificacionesContainer.appendChild(calificacionInput);
    }
    
    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Resultados";
    calcularButton.onclick = function() {
        calcularResultados(cantidadAlumnos);
    };
    calificacionesContainer.appendChild(calcularButton);
}

function calcularResultados(cantidadAlumnos) {
    var resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores
    
    for (var i = 1; i <= cantidadAlumnos; i++) {
        var calificacion = parseFloat(document.getElementById("calificacionesContainer").children[i - 1].value);

        var resultado = document.createElement("p");
        resultado.textContent = "Alumno " + i + ": " + (calificacion >= 70 ? "Aprobado" : "Reprobado");
        resultadosDiv.appendChild(resultado);
    }
}


