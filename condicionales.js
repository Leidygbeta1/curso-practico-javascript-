//CONDICIONALES CON IF//

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```


//otro ejemplo 

var numero =1;

 var resultado = numero === 1 ? "Si soy uno " : "No soy uno";

 // CONDICIONALES CON SWITCH//

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}

// OTRO DE SWITCH//

function playGame (human, machine) {
    switch(human){
        case "rock":
            switch(machine){
                case "scissors":
                    console.log("You win!");
                    break;
                case "paper":
                    console.log("You lose!"); 
                    break;
                default:
                    console.log("Its a tie!"); 
                    break;
            }
            break;
        case "paper":
            switch(machine){
                case "rock":
                    console.log("You win!"); 
                    break;
                case "scissors":
                    console.log("You lose!"); 
                    break;
                default:
                    console.log("Its a tie!"); 
                    break;
            }
            break;
        case "scissors":
            switch(machine){
                case "paper":
                    console.log("You win!"); 
                    break;
                case "rock":
                    console.log("You lose!"); 
                    break;
                default:
                    console.log("Its a tie!"); 
                    break;
            }
            break;
    }
    console.log("H:" + human +" M:"+ machine);
}

var options = ["rock", "paper", "scissors"];
var machine = options[Math.floor(Math.random() * options.length)];
var choice = prompt("Enter your choice 1-rock, 2-paper or 3-scissors.");

playGame(options[choice-1], machine);