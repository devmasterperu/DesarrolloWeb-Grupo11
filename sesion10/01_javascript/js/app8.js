/**
 * ESTRUCTURA CONDICIONAL
 */

// SWITCH
let dia = new Date().getDay()
let htmlDia = document.getElementById('dia')
console.log(htmlDia)

switch(dia) {
    case 1:
        console.log('lunes');
        htmlDia.innerText = 'lunes'
        break;
    case 2:
        console.log('martes');
        htmlDia.innerText = 'martes'
        break;
    case 3:
        console.log('miercoles');
        htmlDia.innerText = 'miercoles'
        break;
    case 4:
        console.log('jueves');
        htmlDia.innerText = 'jueves'
        break;
    case 5:
        console.log('viernes');
        htmlDia.innerText = 'viernes'
        break;
    case 6:
        console.log('sabado');
        htmlDia.innerText = 'sabado'
        break
    default:
        console.log('domingo');
        htmlDia.innerText = 'domingo'
        break
}