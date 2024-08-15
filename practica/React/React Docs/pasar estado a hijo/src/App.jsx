import { useState } from 'react'

const Display1 = props => {
  //este componente solo usa el campo counter de props (el parametro)
  //entonces podemos usar desestructuracion para simplificarlo --> Ver Display2
  return (
    <div>
      {props.counter}
    </div>
  )
}

const Display2 = ({ counter }) => {
  //a su vez, esta funcion solo tiene una declaracion return, por lo que podemos quitar los corchetes y el return, para simplificarlo aun mas
  //Ver Display
  return (
    <div>
      {counter}
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>


// y podemos hacer lo mismo con el componente Button1 --> Ver Button

const Button1 = props => {
  return (
    //El controlador de eventos se pasa al componente Button a través de la propiedad onClick.
    <button onClick={props.onClick}>

      {props.text}
    </button>
  )
}

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)


const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('increasing, value before', counter)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('decreasing, value before', counter)
  }

  const setToZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before', counter)
  }

  return (
    <div>

      <Display counter={counter} />
      <Button onClick={increaseByOne} text='plus' />
      <Button onClick={decreaseByOne} text='minus' />
      <Button onClick={setToZero} text='zero' />
    </div>
  )
}

export default App