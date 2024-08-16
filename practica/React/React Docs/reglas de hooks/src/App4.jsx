//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
const [value, setValue] = useState(10)

const setToValue = (newValue) => () => {
  console.log('value now', newValue) // imprime el nuevo valor en la consola
  setValue(newValue)
  //newValue es el valor puesto DENTRO de la funcion del controlador, en el componente, como parametro
}

  return (
  <div>
    {value}
    <button onClick={setToValue(1000)}>1000</button>
    <button onClick={setToValue(0)}>0</button>
    <button onClick={setToValue(value + 1)}>plus</button>
  </div>    
  )
}
export default App
