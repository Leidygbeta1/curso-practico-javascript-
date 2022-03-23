

var miNombre;//declara//
miNombre = "Leidy"; //inicia//

//Si lo usamos, nos saldria undefined, pasando lo que llamamos hosting, ya que no declaramos antes la varible//

console.log(miNombre);
var miNombre = "Leidy";

//Otro ejemplo de hosting, donde declaramos la variable despues de la funcion//

hey();

function hey(){
    console.log("hola"+  miNombre);
}
var miNombre ="leidy";
