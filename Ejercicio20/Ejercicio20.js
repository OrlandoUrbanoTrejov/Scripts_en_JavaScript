/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * Concatenar 3 numeros o letras y mostrar el resultado */
function calcularSuma() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var suma = numero1 + numero2 + numero3;
   
    document.getElementById("suma").textContent = "Suma: " + suma;
}


