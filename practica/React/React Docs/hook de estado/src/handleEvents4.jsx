//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  
  return (
  <div>
    <div>{counter}</div>
    <button onClick={increaseByOne}>
        plus
      </button>

    <button onClick={setToZero}>
      reset
    </button>
  </div>
  )
}

// Otra forma de ahorrar codigo en caso de que querramos usar la funcion en multiples botones

export default App