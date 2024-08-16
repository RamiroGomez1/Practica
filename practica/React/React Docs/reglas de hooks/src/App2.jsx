//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
const [value, setValue] = useState(10)

const hello = () => {
  const handler = () => console.log('hola')
  return handler
}

  return (
  <div>
    {value}
    <button onClick={hello()}>reset to zero1</button>
    <button onClick={()=>console.log('hola')}>reset to zero2</button>
  </div>    
  )
}

export default App
