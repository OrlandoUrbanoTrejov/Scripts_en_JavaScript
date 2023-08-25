/* Orlando Urbano Trejo (Lando)
 * Fecha: 24-08-2023
 * Correo: urbanoorlando79@gmail.com
 *
 * Ejercicio:
 * En un hospital existen 3 áreas: Urgencias, Pediatría y Traumatología. 
 * El presupuesto anual del hospital se reparte de la siguiente manera: 
 * Pediatría 42% y Traumatología 21% */
function calcularPresupuestos() {
    var presupuesto = parseFloat(document.getElementById("presupuesto").value);
    var urgencias = presupuesto * 0.37;
    var pediatria = presupuesto * 0.42;
    var traumatologia = presupuesto * 0.21;
    
    var urgencia = document.getElementById("urgencias");
    var pediatrias = document.getElementById("pediatria");
    var traumatologias = document.getElementById("traumatologia");
    
    urgencia.textContent = "Presupuesto Urgencias: " + urgencias.toFixed(2);
    pediatrias.textContent = "Presupuesto Pediatría: " + pediatria.toFixed(2);
    traumatologias.textContent = "Presupuesto Traumatología: " + traumatologia.toFixed(2);
}

