/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-07-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Realiza un codigo que calcule la mitad de la tercera parte del doble de un numero */
function realizarOperaciones() {
    var numero = parseFloat(document.getElementById("numero").value);
    var r1 = numero * 2;
    var r2 = r1 / 3;
    var r3 = r2 / 2;
    
    var resultado = document.getElementById("resultado");
    resultado.textContent = "La mitad de la tercera parte del doble de " + numero + " es: " + r3;
}

