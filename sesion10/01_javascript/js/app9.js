/**
 * ESTRUCTURA REPETITIVA
 */
// for
const htmlLista = document.getElementById('lista-papas')

let lista = [
    'papas',
    'sal',
    'aceite',
    'sarte',
    'cocina'
]
// console.log(lista[0])
// console.log(lista[2])
console.log(htmlLista)

// template literal (backtick)
let html = '';
for (let index = 0; index < lista.length; index++) {
    // console.log(index);
    // console.log(lista[index]);
    // html += '<li>'+ lista[index] +'</li>'
    html += `<li>${lista[index]}</li>`
}
htmlLista.innerHTML = html
