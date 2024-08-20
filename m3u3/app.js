const distancia = document.getElementById('distancia')
const resultadoTexto = document.getElementById('resultado')

function mejorTransporte() {

    if (distancia.value >= 0 && distancia.value <= 1000) {
        resultadoTexto.innerText = 'pie'
    } else if (distancia.value > 1000 && distancia.value <= 10000) {
        resultadoTexto.innerText = 'bicicleta'
    }
     else if (distancia.value > 10000 && distancia.value <= 30000) {
        resultadoTexto.innerText = 'colectivo'
    }
     else if (distancia.value > 30000 && distancia.value <= 100000) {
        resultadoTexto.innerText = 'auto'
    }
     else {
        resultadoTexto.innerText = 'avion'
    }

}
