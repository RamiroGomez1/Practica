import { useState } from 'react'


const App1 = () => {
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={()=>setLeft(left+1)}>
        left
      </button>
      <button onClick={()=>setRight(right+1)}>
        right
      </button>
      {right}
    </div>
  )
}

const App = () => {
  //guardamos el recuento de clicks en un solo objeto:
  const [clicks,setClicks] = useState({
    left: 0,
    right: 0
  })


  //ahora las funciones para manejar cada click individualmente

  const handleLeftClick1 = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
    //gracias a esta funcion con el parametro newClicks, el objeto entre corchetes de newClicks se establece como el nuevo estado de la aplicacion
  }
  
  const handleRightClick1 = () => {
    const newClicks = {
      //otra forma de definir el nuevo objeto de estado es con object spread
      ...clicks,    
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  //...clicks crea un nuevo objeto que tiene copias de todas las propiedades del objeto.
  // { ...clicks, right: clicks.right + 1 }
  // en este caso, ...clicks crea un objeto nuevo con los mismos datos, pero al especificar right con un valor nuevo, este cambia al valor que le dimos en el ultimo array


  //reformulamos los controladores de eventos
  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {clicks.right}
    </div>
  )
}
export default App