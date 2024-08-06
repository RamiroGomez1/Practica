//  Los props que se pasan al componente asi 
const Hello = ({ name , age }) => {
//se desestructuran directamente en las variables name y age


const bornYear = () => new Date().getFullYear() - age



/*
La desestructuracion podemos usarla para extraer y reunir los valores de las propiedades
de un objeto en variables separadas:

const { name, age } = props

Por ejemplo: cuando el objeto que estamos desestructurando se ve asi

  props = {
    name: 'Arto Hellas',
    age: 35,
  }

la expresion const { name, age } = props asigna los valores 'Arto Hellas' a name y 35 a age
*/


  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App