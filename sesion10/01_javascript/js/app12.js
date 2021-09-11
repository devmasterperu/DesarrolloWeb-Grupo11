/**
 * ESTRUCTURA REPETITIVA
 */
// filter
const htmlTabla = document.getElementById('tabla-cursos')
let listaCursos = [
    {
        id: 1,
        curso: 'Base de Datos',
        estado: 1
    },
    {
        id: 2,
        curso: 'Desarrollo Backend',
        estado: 1
    },
    {
        id: 3,
        curso: 'Desarrollo Frontend',
        estado: 1
    },
    {
        id: 4,
        curso: 'Algoritmos',
        estado: 0
    }
]

// template literal (backtick)
let dataFilter = listaCursos.filter(function(item){
    return item.estado == 3
})

if (dataFilter.length > 0) {
    let html = '';
    dataFilter.forEach(function(item){
        html += `<tr>
            <td>${item.id}</td>
            <td>${item.curso}</td>
            <td>`
                if(item.estado == 1) {
                    html += `<span style="color: lime">ACTIVO</span>`
                } else {
                    html += `<span style="color: red">INACTIVO</span>`
                }
        html += `</td>
        </tr>`
    })
    htmlTabla.innerHTML = html
} else {
    htmlTabla.innerHTML = `
        <tr>
            <td colspan="3"> sin resultado </td>
        </tr>
    `
}