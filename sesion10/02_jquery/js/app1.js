// https://jquery.com/download/
// const htmlTabla = document.getElementById('tabla')
// console.log(htmlTabla)

$(document).ready(function(){
    console.log('Hola, hoy es la ultima clase 😪')
    console.log($('#tabla'))
    console.log($('.border'))
    console.log($('h1').html())
    $('#titulo').html('LISTA DE <span style="color: red">CURSOS</span>')

    $('#titulo').before('<p>elemento creado antes del titulo</p>')
    $('#titulo').after('<p>elemento creado despues del titulo</p>')

    $('#lista').append('<li>agregado con append</li>')
    $('#lista').append('<li>agregado con append 2</li>')
    $('#lista').prepend('<li>agregado con preprend</li>')
    $('#lista').prepend('<li>agregado con preprend 2</li>')

    console.log($('#titulo').css('color'))
    console.log($('#titulo').css('background-color','lime'))
    console.log($('#titulo').css({
        'border':'3px dashed deeppink',
        'border-radius':'12px',
    }))

    $('#icon-menu').on('click', function(){
       $('div').toggleClass('active')
    })
})