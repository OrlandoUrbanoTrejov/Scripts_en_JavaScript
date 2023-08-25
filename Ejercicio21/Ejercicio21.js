/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Obtener la edad de una persona en meses, si se ingresa su edaden años y meses. 
 * Ejemplo: Ingresado 3 años 4 meses debe mostrar 40 meses*/
function calcularEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    var meses = parseInt(document.getElementById("meses").value);
    var resultado = (edad * 12) + meses;
    
    document.getElementById("resultado").textContent = "Edad en meses: " + resultado;
}

