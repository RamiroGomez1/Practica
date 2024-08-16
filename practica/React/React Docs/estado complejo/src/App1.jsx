import { useState } from 'react'

const App = () => {
  
  
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setAll] = useState([])
//allClicks es un array vacio en el que tenemos registro de en que orden fueron siendo agregados los clicks
//cada click se almacena en esta pieza de estado que se inicializa como un array vacio  'useState([])'. 
  


const handleLeftClick = () => {


    setAll(allClicks.concat('L')) //.concat('L') crea una copia del array allClicks, pero agregando L a este
    //se agrega L al array
    

    setLeft(left + 1)
  }
  
  
    const handleRightClick = () => {
      setAll(allClicks.concat('R')) 
      setRight(right + 1)
    }


  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
export default App