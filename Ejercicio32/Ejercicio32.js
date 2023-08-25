/* Autor:  Orlando Urbano Trejo (Lando)
 * Fecha:  24-08-2023 
 * Correo: urbanorlando79@gmail.com
 *
Ejercicio: iHaciendo uso de arreglos bidimensionales, solicita la calificación de las siguientes materias:
→ Cálculo Diferencial.
→ Fundamentos de programación.
→ Química.
→ Fundamentos de investigación.
→ Matemáticas Discretas.
→ Desarrollo Sustentable.
Recuerda que cada materia tiene 5 unidades, una vez obtenida cada calificación por unidad, calcula el promedio de cada materia. Finalmente, calcula el promedio general. */

var materias = [
    "Cálculo Diferencial",
    "Fundamentos de Programación",
    "Química",
    "Fundamentos de investigación",
    "Matemáticas Discretas",
    "Desarrollo Sustentable"
];

var calificaciones = [];

var promediosMaterias = [0, 0, 0, 0, 0, 0];
var promedioGeneral = 0;

var tablaCalificaciones = document.getElementById("tablaCalificaciones");
var promedioGeneralElement = document.getElementById("promedioGeneral");

for (var i = 0; i < 6; i++) {
    var row = tablaCalificaciones.insertRow();
    var materiaCell = row.insertCell(0);
    materiaCell.textContent = materias[i];

    calificaciones[i] = [];

    for (var j = 0; j < 5; j++) {
        var calificacion = parseFloat(prompt("Calificación para " + materias[i] + " - Unidad " + (j + 1) + ":"));
        calificaciones[i][j] = calificacion;
        promediosMaterias[i] += calificacion;
    }

    promediosMaterias[i] /= 5;
    promedioGeneral += promediosMaterias[i];

    for (var j = 0; j < 5; j++) {
        var cell = row.insertCell(j + 1);
        cell.textContent = calificaciones[i][j];
    }

    var promedioCell = row.insertCell(6);
    promedioCell.textContent = promediosMaterias[i].toFixed(2);
}

promedioGeneral /= 6;
promedioGeneralElement.textContent = "Promedio general: " + promedioGeneral.toFixed(2);

