
let puntajeUsuario = 0;

var lanzado = 0;

const cuadricula = [
    { name: 1, cantidad: '10' },
    { name: 2, cantidad: '50' },
    { name: 3, cantidad: '100' },
    { name: 4, cantidad: '150' },
    { name: 5, cantidad: '200' },
    { name: 6, cantidad: '400' },
    { name: 7, cantidad: '800' },
    { name: 8, cantidad: '1000' },
    { name: 9, cantidad: '1500' },
    { name: 10, cantidad: '2000' }
];

function lanzarMoneda() {
    lanzado = Math.round(Math.random() * (10 - 1 + 1) + 1);
    return lanzado;
}

function indicarPuntaje(numero) {
    return numero.name == lanzado;
}


lanzado = lanzarMoneda();

console.log("lanzado Uno : " + lanzado);

buscarPremio = cuadricula.find(indicarPuntaje);
puntajeUsuario += parseInt(buscarPremio.cantidad);

console.log("El Jugador le pegó al casillero : " + lanzado);
console.log("Puntos Acumulados: " + puntajeUsuario);

