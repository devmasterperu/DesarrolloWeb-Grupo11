/**
 * TIPOS DE DATOS
 */

// PRIMITIVOS
let nombreMascota = 'Bombon'
let edadMascota = 7
let vacuna = true
let mascota // undefined
let alimentoMascota = null

// COMPUESTOS
let listaAlumnos = [
    'Antony Morales',
    'Karen Sanchez'
]
console.log(listaAlumnos)
console.log(listaAlumnos[1])

let usuario = {
    nombre: 'Antony',
    apellido: 'Morales',
    edad: 30,
    mascota: true
}
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.edad)

/**
 * OPERADORES (TIPO DE DATO)
 */
console.log(typeof(nombreMascota))
console.log(typeof(edadMascota))

/**
 * OPERADORES (ARITMETICO)
 */

let valorA = 20;
let valorB = 2;

console.log(valorA + valorB)
console.log(valorA - valorB)
console.log(valorA * valorB)
console.log(valorA / valorB)
console.log(valorA % valorB)

let textoA = 'Hola, '
let textoB = 'bienvenido al curso 😀'
console.log(textoA + textoB)

// PROMP
let edadUsuario = prompt('Ingrese su edad')
console.log(edadUsuario)