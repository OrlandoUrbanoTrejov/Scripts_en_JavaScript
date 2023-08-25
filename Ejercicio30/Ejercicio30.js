/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio: Haciendo uso de 2 arreglos, almacena 5 números en cada arreglo, posteriormente vas a multiplicar los arreglos */
function calcularMultiplicacion() {
    var primerArray = document.querySelectorAll("#primerArray .valor");
    var segundoArray = document.querySelectorAll("#segundoArray .valor");
    var resultado = document.getElementById("resultado");
    
    var multiplicacion = [];

    for (var i = 0; i < 5; i++) {
        var valor1 = parseInt(primerArray[i].value);
        var valor2 = parseInt(segundoArray[4 - i].value);
        
        multiplicacion[i] = valor1 * valor2;
    }

    resultado.innerHTML = ""; 

    for (var i = 0; i < 5; i++) {
        var resultadoLi = document.createElement("li");
        resultadoLi.textContent = multiplicacion[i];
        resultado.appendChild(resultadoLi);
    }
}

