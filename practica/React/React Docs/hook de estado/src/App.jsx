//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  //agregamos state al componente, y lo renderiza iniciandolo con el valor 0
  const [counter, setCounter] = useState(0)
  //la funcion devuelve un array con 2 elementos. Asignamos estos a las variables counter y setCounter con desestructuracion

  /*
  counter es la variable de estado que almacena el valor del contador (inicialmente 0).
  setCounter es la función que puedes usar para cambiar el valor de counter. 
*/


  setTimeout(
    // setTimeout(functionRef, delay)

    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App

// La función pasada como primer parámetro a la función setTimeout se invoca un segundo después de llamar a la función setTimeout

// Cuando se llama a la función de modificación de estado setCounter, React vuelve a renderizar el componente

// La segunda vez que la función del componente es ejecutado, llama a la función useState y devuelve el nuevo valor del estado: 1.
//también se realiza una nueva llamada de función a setTimeout, que ejecuta el tiempo de espera de un segundo e incrementa el estado counter


