//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
const [value, setValue] = useState(10)

const setToValue = (newValue) => () => {
  console.log('value now', newValue) // imprime el nuevo valor en la consola
  setValue(newValue)
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  return (
  <div>
    {value}
    <Button onClick={()=>setToValue(1000)} text='thousand'/>
    <Button onClick={()=>setToValue(0)} text='zero'/>
    <Button onClick={()=>setToValue(value + 1)} text='plus'/>
  </div>    
  )
}
export default App
