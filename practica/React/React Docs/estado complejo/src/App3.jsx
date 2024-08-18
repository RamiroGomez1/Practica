import { useState } from 'react'

const History = (props) => {
  if(props.allClicks.length === 0) {
    return(<div>the app is used by pressing the buttons</div>)
  }
  return (
    <div>button press history {props.allClicks.join(' ')}</div>
    // accedo al array con el registro de clicks y los separo con 1 espacio
  )
}

const App = () => {


  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


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
  
  const handleResetClick = () => {
    const updatedRight = right - right
    const updatedLeft = left - left
    setRight(updatedRight)
    setLeft(updatedLeft)
  }

//Creemos un solo componente Button para achicar codigo
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>)


  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <Button handleClick={handleResetClick} text='reset' />
      <History allClicks={allClicks} />
      
    </div>
  )
}
export default App