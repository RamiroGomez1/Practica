const input = document.getElementById('input')
const resultado_text = document.getElementById('resultado')

const numerosIngresados = []

function ingresarNumero() {
    if(!input.value) {
        alert('ingrese un numero')
        return null
    }

    numerosIngresados.push(input.value)
    console.log(numerosIngresados)
    input.value = ''
}


function numeroMasGrande(array) {
    const numeroMayor = Math.max(...array)
    return numeroMayor
}

function averiguarNumero (){
    const resultado_numero = numeroMasGrande(numerosIngresados)
    console.log(resultado_numero)
    resultado_text.innerText = resultado_numero
}

