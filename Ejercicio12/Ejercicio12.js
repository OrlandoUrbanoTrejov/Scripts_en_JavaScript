/* Orlando Urbano Trejo (Lando)
 * Fecha: 22-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio: 
 * Una persona recibe un prestamo de 10,000 de un banco y desea saber cuanto pagara de interes, si el banco le cobrara una tasa de 27% anual */

function calcularIntereses() {
    var anioPrestamo = parseInt(document.getElementById("anioPrestamo").value);
    var anioActual = parseInt(document.getElementById("anioActual").value);
    var resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = ""; 
    
    var prestamo = 1000;
    for (var i = anioPrestamo; i <= anioActual; i++) {
        prestamo = prestamo + (prestamo * 0.27);
        
        var resultado = document.createElement("p");
        resultado.textContent = `El interés de ${i} es de: $${prestamo}`;
        resultadosDiv.appendChild(resultado);
    }
}

