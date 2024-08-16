import { useState } from 'react'

const App = () => {


  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)


  const handleLeftClick1 = () => {
    setAll(allClicks.concat('L'))
    console.log('left before', left)
    setLeft(left + 1)
    console.log('left after', left)
    setTotal(left + right)
  }

  /*
  Al ver la consola veo que se logea:

  left before 0
  left after 0
  left before 1
  left after 1

  Esto se debe a que la renderizacion nueva de React ocurre aincronicamente
  Esto significa que ocurre en algun momento antes de renderizarlo, no inmediatamente antes
  Por lo tanto, necesitamos asegurar el renderizado del contador actualizado
  Para esto creamos una nueva variable updatedLeft antes de renderizarlo
  */


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
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
      <p>total {total}</p>
    </div>
  )
}
export default App