/**
 * HOISTING
 */

// IF ELSE
let edadUsuario = prompt('ingrese su edad')
// console.log(typeof(Number(edadUsuario)))

if(Number(edadUsuario) >= 18) {
    console.log('llevarlo a una nueva vista (eres mayor de edad)')
    window.location.href = "mayor-edad.html"
} else {
    console.log('refrescar la vista (eres menor de edad)')
    window.location.reload()
}

