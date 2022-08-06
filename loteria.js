var numerosGanadores;
var numerosAsignados;
// creo un tablero para el jugador 1, de 3 numeros. 
function crearCarton(){
    let numeroUno = asignarNumeros();
    let numeroDos = asignarNumeros();
    let numeroTres = asignarNumeros();
    let numeroCuatro = asignarNumeros();
    let carton = [numeroDos,numeroTres,numeroUno,numeroCuatro]
    return carton;
}
//corro el dado random con 3 números. 

function asignarNumeros(){
    numerosAsignados =  Math.round(Math.random() * (10 - 1 + 1) + 1);
    return numerosAsignados
}
//Sorteo 3 números.
function resultadoLoteria(){
    numerosGanadores = crearCarton();
    return numerosGanadores;
}
//comparar Carton con Numeros Sorteados
function compararResultados(){
    // console.log("hola " + cartonJugador);
    // console.log("hola " + numerosSorteados);
    let coincidencias = numerosSorteados.filter(element => cartonJugador.includes(element));
    return coincidencias;
}
//switch de premios entre aciertos / dinero
function resultadoJuego(){
    switch(aciertosFinales){
        case 0 :{ 
            return "No ha tenido suerte el día de hoy :( ";
            break;
        }
        case 1: {
            
            return "Bien! Ha ganado $1000"
            break;
        }
        case 2 :{
            return "Wow!! has ganado $10.000 "
            break;
        }
        case 3 :{
            return "Wow!! has ganado $50.000 "
            break;
        }
        case 4 :{
            return "Es tu día de suerte!! Has ganado $200.000"
            break;
        }
    }
}

let cartonJugador = crearCarton();

let numerosSorteados = resultadoLoteria();

let aciertos = compararResultados();

let aciertosFinales = aciertos.length;
let resultado = resultadoJuego();

console.log("Numeros asignados :")
console.log(cartonJugador[0] + ', ' +cartonJugador[1] +', '+ cartonJugador[2] + ',' + cartonJugador[3]);
console.log("----------------")
console.log("Resultado del Sorteo :")
console.log(numerosSorteados[0] + ', ' +numerosSorteados[1] +', '+ numerosSorteados[2] + ',' + numerosSorteados[3]);

console.log("----------------")
console.log("Numeros acertados: "+ aciertos + " . Total de números acertados " + aciertosFinales);

console.log(resultado);

// console.log("Con " + coincidencias + "el puntaje es : " + puntaje);
// console.log("----------------")
// console.log(numerosSorteados);
// console.log(cartonJugador);
