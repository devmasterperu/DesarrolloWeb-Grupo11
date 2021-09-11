/**
 * FUNCION
 */

// FUNCION DECLARADAS
function saludar() {
    console.log('Hola, esta es la ultima sesion del curso 😪')
}
saludar()

function sumar(valorA, valorB) { // parametros
    return valorA + valorB
}
console.log(sumar(5, 10)) // argumentos

// FUNCION EXPRESADA
let restar = function(valorA, valorB) { // parametros
    return valorA - valorB
}
console.log(restar(10, 5))