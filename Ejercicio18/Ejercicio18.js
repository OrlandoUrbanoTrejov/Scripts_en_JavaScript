/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Escriba un algoritmo que, dado el número de horas trabajadas por un empleado y el sueldo por hora, calcule el sueldo total de ese empleado */
function calcularSueldo() {
    var horas = parseFloat(document.getElementById("horas").value);
    var sueldo = parseFloat(document.getElementById("sueldo").value);
    var total = horas * sueldo;
    
    document.getElementById("total").textContent = "Sueldo: $" + total.toFixed(2);
}

