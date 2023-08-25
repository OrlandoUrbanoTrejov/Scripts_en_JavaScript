/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Calcular el nuevo salario de un empleado si se le descuenta el 20% de su salario actual */
function calcularSalario() {
    var nombre = document.getElementById("nombre").value;
    var salario = parseFloat(document.getElementById("salario").value);
    var total = salario - (salario * 0.29);
    
    document.getElementById("nombreResultado").textContent = nombre;
    document.getElementById("total").textContent = total.toFixed(2);
}

