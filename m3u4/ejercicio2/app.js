const textarea = document.getElementById('textarea')
const contador = document.getElementById('counter')

function contarCaracteres() {
    const display = textarea.value
    console.log(display)

    const arrayCaracteres = display.split('')
    console.log(arrayCaracteres);

    contador.innerText = 'Hay ' + arrayCaracteres.length + ' caracteres.' 
}

textarea.addEventListener('input',contarCaracteres)