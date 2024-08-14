//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
 
  const handleClick = () => {
    console.log('clicked')
  }



  return (
  <div>
    <div>{counter}</div>
    <button onClick={handleClick}>
        plus
      </button>
  </div>
  )
}


   // <button onClick={handleClick}>
   // cuando presione el boton, se llama a la funcion handleClick

export default App