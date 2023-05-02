// creacion de variables
let nombre;
let aprobadas;
let desaprobadas;
let situacion;
// creacion de funcion para ver situacion del alumno

function obtenerSituacionAlumno(nombre, aprobadas, desaprobadas) {
    let situacion = "";
    if (aprobadas === 10) {
        situacion += "Felicidades, pasaste de año con una situación excelente. ";
    } else if (aprobadas >= 7 && aprobadas <= 9) {
        situacion += "Felicidades, pasaste de año en una situación normal con " + desaprobadas + " materias desaprobadas. ";
    }
    if (desaprobadas >= 1 && desaprobadas <= 3) {
        situacion += "Tu situación es normal.";
    } else if (desaprobadas >= 4 && desaprobadas <= 5) {
        situacion += "Tu situación es complicada.";
    } else if (desaprobadas > 5) {
        situacion += "Tu situación es de repitencia.";
    }
    alert(nombre + ", " + situacion);
}
// Empieza el programa

let nombreAlumno = prompt("Ingrese el nombre del alumno");
let materiasAprobadas = parseInt(prompt("Ingrese la cantidad de materias aprobadas"));
let materiasDesaprobadas = parseInt(prompt("Ingrese la cantidad de materias desaprobadas"));
let continuar = true;

while (continuar) {
    obtenerSituacionAlumno(nombreAlumno, materiasAprobadas, materiasDesaprobadas);
    let respuesta = prompt("¿Desea ingresar información de otro alumno? (Sí/No)");
    if (respuesta.toLowerCase() !== "sí" && respuesta.toLowerCase() !== "si") {
        continuar = false;
        alert("El programa ha finalizado. ¡Gracias por usarlo!");
    } else {
        nombreAlumno = prompt("Ingrese el nombre del alumno");
        materiasAprobadas = parseInt(prompt("Ingrese la cantidad de materias aprobadas"));
        materiasDesaprobadas = parseInt(prompt("Ingrese la cantidad de materias desaprobadas"));
    }
}



