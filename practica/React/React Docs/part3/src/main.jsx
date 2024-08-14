import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

//Podemos hacer que el componente 
//se vuelva a renderizar llamando al método ReactDOM.render por segunda vez

const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App counter={counter} />

        // El comando de re-renderizado se ha envuelto dentro de la 
        // función refresh para reducir la cantidad de código copiado y pegado.

    )
}

setInterval(() => {
    refresh()
    counter += 1
}, 1000)

//Llamar en repetidas ocasiones no es una buena practica al momento de re-renderizar componentes, para eso esta el capitulo 'Componente con estado'