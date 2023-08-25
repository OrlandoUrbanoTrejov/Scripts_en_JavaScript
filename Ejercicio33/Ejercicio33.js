/* Autor:  Orlando Urbano Trejo (Lando)
 * Fecha:  24-08-2023 
 * Correo: urbanorlando79@gmail.com
 *
 * Ejercicio: Los alumnos de primer semestre de la carrera de Ingeniería en Sistemas Computacionales tienen
que organizarse para el desfile del 20 de noviembre. Cada alumno deberá ir vestido de acuerdo al taller
en el que está inscrito: 
Presentaran un espectáculo en la Plaza Manuel Ávila Camacho de Jilotepec (El valor por esta
actividades de 1 crédito). Los Alumnos que hayan participado en la carrera tendrán 1 crédito, si logro
quedar en uno de los 3 primeros lugares, tendrá 1 crédito más. Imprime el total de créditos.*/
function determinarCreditos() {
    var creditoTaller = parseInt(document.getElementById("creditoTaller").value);
    var resultado = "";

    if (creditoTaller === 1) {
        resultado += "Tienes un crédito\n";

        var carrera = parseInt(prompt("Participaste en la carrera (1 = sí y 2 = NO): "));
        if (carrera === 1) {
            resultado += "Tienes otro crédito\n";

            var lugar = parseInt(prompt("Quedaste en uno de los 3 primeros lugares (1 = sí y 2 = NO): "));
            if (lugar === 1) {
                resultado += "Genial, tienes tres créditos";
            } else if (lugar === 2) {
                resultado += "Tienes dos créditos";
            }
        } else if (carrera === 2) {
            resultado += "Tienes solo un crédito";
        }
    } else if (creditoTaller === 2) {
        resultado += "Inscríbete a un taller por favor\n";

        var carrera = parseInt(prompt("Participaste en la carrera (1 = sí y 2 = NO): "));
        if (carrera === 1) {
            resultado += "Tienes un crédito\n";

            var lugar = parseInt(prompt("Quedaste en uno de los 3 primeros lugares (1 = sí y 2 = NO): "));
            if (lugar === 1) {
                resultado += "Tienes dos créditos";
            } else if (lugar === 2) {
                resultado += "Tienes un crédito";
            }
        } else if (carrera === 2) {
            resultado += "No tienes ningún crédito";
        }
    } else {
        resultado += "Opción inválida";
    }

    document.getElementById("resultado").textContent = resultado;
}

