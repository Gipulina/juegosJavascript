
const prompt = require("prompt-sync")({ sigint: true });
//tirar un número de 1 a 25.
//Imprimir todos los números de 1 a 25 pero en el lugar del número Random imprimir el "Numero Ganador."
const inicioRuleta = 1;
const finalRuleta = 10;
let numeroGanador;
let numeroJugador = 0;

function tirarRuleta() {
    numeroGanador = Math.round(Math.random() * (finalRuleta - inicioRuleta + 1) + inicioRuleta);
    for (i = 1; i <= finalRuleta; i++) {
        if (numeroGanador == i) {
            console.log("Numero Ganador");
        } else {
            console.log(i);
        }
    }
}

function compararResultados() {
    if (numeroGanador == numeroJugador) {
        return 'Wow usted ha Ganadoooo!'
    } else {
        return "Ooohhhh ha perdido, vuelva a participar :) "
    }
}


do {
    numeroJugador = parseInt(prompt("Adivina qué número saldra ganador entre 1 y 10: "));
} while (numeroJugador >= 11);



tirarRuleta();

let verSiElJugadorGano = compararResultados();
console.log(" Lotería: Número Ganadooor  -->" + numeroGanador);
console.log("--------------------------");
console.log(" Numero Elegido  --> "+ numeroJugador);
console.log("--------------------------");
console.log(" Resultado --> "+ verSiElJugadorGano);
