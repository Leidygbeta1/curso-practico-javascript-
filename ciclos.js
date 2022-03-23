// for //

var frutas = ["Manzana", "Pera", "Naranja", "Platano", "Uva"];

for (i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}: ${frutas[i]}`);
}

for (e of frutas) {
    console.log(`Elemento ${e}`);
}

//otro ejemplo//

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}
for(var alumno of estudiantes) {
    saludarEstudiantes(alumno);
}
//resultado//
Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel

//while//

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)

//while
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}
