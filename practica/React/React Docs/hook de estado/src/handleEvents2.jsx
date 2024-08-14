//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  
  return (
  <div>
    <div>{counter}</div>
    <button onClick={() => console.log('clicked')}>
        plus
      </button>
  </div>
  )
}

  //puedo hacer un arrow function dentro de onClick para ahorrar codigo

export default App