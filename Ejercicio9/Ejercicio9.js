/* Orlando Urbano Trejo (Lando)
 * Fecha: 24:07:2023
 * Correo: urbanoorlando79@gmail.com
 */
/* Ejercicio: 
 * Realice un algoritmo que determine el sueldo semanal de N trabajadores considerando que se les descuenta
 * 5% de su sueldo si ganan entre 0 y 150 pesos. Se les descuenta 7% si ganan mas de 150 pero menos de 300, y 
 * 9% si ganan mas de 300 pero menos de 450. Los datos son horas trabajadas, sueldo por hora, y nombre de cada trabajador */
function calcularSalarios() {
    var numTrabajadores = parseInt(document.getElementById("numTrabajadores").value);
    var trabajadoresContainer = document.getElementById("trabajadoresContainer");
    var resultadosDiv = document.getElementById("resultados");
    
    trabajadoresContainer.innerHTML = "";
    resultadosDiv.innerHTML = ""; 
    
    for (var i = 0; i < numTrabajadores; i++) {
        var trabajadorDiv = document.createElement("div");
        
        var nombreLabel = document.createElement("label");
        nombreLabel.textContent = "Nombre del trabajador " + (i+1) + ": ";
        var nombreInput = document.createElement("input");
        nombreInput.type = "text";
        nombreInput.id = "nombre" + i;
        
        var horasLabel = document.createElement("label");
        horasLabel.textContent = "Horas trabajadas: ";
        var horasInput = document.createElement("input");
        horasInput.type = "number";
        horasInput.id = "horas" + i;
        
        var salarioLabel = document.createElement("label");
        salarioLabel.textContent = "Sueldo por hora: ";
        var salarioInput = document.createElement("input");
        salarioInput.type = "number";
        salarioInput.id = "salario" + i;
        
        trabajadorDiv.appendChild(nombreLabel);
        trabajadorDiv.appendChild(nombreInput);
        trabajadorDiv.appendChild(document.createElement("br"));
        trabajadorDiv.appendChild(horasLabel);
        trabajadorDiv.appendChild(horasInput);
        trabajadorDiv.appendChild(document.createElement("br"));
        trabajadorDiv.appendChild(salarioLabel);
        trabajadorDiv.appendChild(salarioInput);
        
        trabajadoresContainer.appendChild(trabajadorDiv);
    }
    
    var calcularButton = document.createElement("button");
    calcularButton.textContent = "Calcular Resultados";
    calcularButton.onclick = function() {
        mostrarResultados(numTrabajadores);
    };
    trabajadoresContainer.appendChild(calcularButton);
}

function mostrarResultados(numTrabajadores) {
    var resultadosDiv = document.getElementById("resultados");
    
    resultadosDiv.innerHTML = "";
    
    for (var i = 0; i <= numTrabajadores; i++) {
        var nombre = document.getElementById("nombre" + (i+1)).value;
        var horas = parseFloat(document.getElementById("horas" + i).value);
        var salario = parseFloat(document.getElementById("salario" + i).value);
        
        var sueldo = horas * salario;
        var nuevoSalario = 0;
        
        if (salario >= 0 && salario <= 150) {
            nuevoSalario = sueldo * 0.5;
        } else if (salario > 150 && salario <= 300) {
            nuevoSalario = sueldo * 0.7;
        } else if (salario > 300 && salario <= 450) {
            nuevoSalario = sueldo * 0.9;
        }
        
        var total = sueldo - nuevoSalario;
        
        var resultado = document.createElement("p");
        resultado.textContent = "Trabajador: " + nombre + "\n" +
                                "Salario final: " + total;
        resultadosDiv.appendChild(resultado);
    }
}

