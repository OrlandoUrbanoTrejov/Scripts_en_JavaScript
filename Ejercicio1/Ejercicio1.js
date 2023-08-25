function determinarCalificacion() {
    var calificacion = parseInt(document.getElementById("calificacion").value);
    var resultado = "";

    switch (calificacion) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            resultado = "Tu calificación es: F";
            break;
        case 6:
        case 7:
            resultado = "Tu calificación es: D";
            break;
        case 8:
            resultado = "Tu calificación es: C";
            break;
        case 9:
            resultado = "Tu calificación es: B";
            break;
        case 10:
            resultado = "Tu calificación es: A";
            break;
        default:
            resultado = "Calificación inválida";
            break;
    }

    document.getElementById("resultado").textContent = resultado;
}

