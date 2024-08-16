//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
const [value, setValue] = useState(10)

const setToZero = () => setValue(0)

  return (
  <div>
    {value}
    <button onClick={setToZero}>reset to zero</button>
  </div>    
  )
}

export default App
