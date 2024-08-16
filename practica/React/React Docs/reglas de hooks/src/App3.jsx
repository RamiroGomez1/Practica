//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
const [value, setValue] = useState(10)

const hello1 = (who) => {
  const handler = () => console.log('hola',who)
  return handler
}
//esta funcion se puede achicar 


const hello = (who) => () =>{ 
  console.log('hola',who)
}

  return (
  <div>
    {value}
    <button onClick={hello('world')}>reset to zero1</button>
    <button onClick={hello('react')}>reset to zero1</button>
    <button onClick={hello('function')}>reset to zero1</button>
  </div>    
    //ahora el parametro dentro de la funcion se envia al componente como prop 'who'
  )
}
export default App
