//Importamos la funcion useState
import { useState } from 'react'

const App = () => {
  
// los hooks solo se pueden llamar desde el interior de un cuerpo de la función que define un componente de React
// Ejemplos de estos son los bucles, condicionales o funciones internas

//  Lo que esta bien:

// Esto está bien porque siempre se ejecuta en cada render en el mismo orden
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')



  
  //Los hooks deben ser llamados siempre en el mismo orden
  //Si los hooks se llaman dentro de condicionales, bucles o funciones, el orden de llamada puede cambiar entre renders, lo que rompe esta asociación.
  
// Lo que esta mal: 

  if( age > 10) {
    const [foobar, setFoobar] = useState(null)
    //esto no funciona
  }

  for ( let i = 0; i < age; i++) {
    const [rightWay, setRightWay] = useState(false)
    //esto tampoco esta bien
  }

  const notGood = () => {
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}

export default App
