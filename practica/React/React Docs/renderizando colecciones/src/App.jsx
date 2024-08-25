import Note from './components/Note'

const App = ({notes}) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
          <li

            key={note.id}
          //los elementos de la lista, es decir, los elementos generados por el método map, deben tener cada uno un valor de clave única: un atributo llamado key.

          >{note.content}</li>

        )}
      </ul>
    </div>
  )
}

/* 
Map

si agregamos este codigo:

const result = notes.map(note => note.id)
console.log(result) 

se imprimira [1,2,3]

esto ya que la funcion flecha note => note.id no es mas que esto:
note => {
  return note.id
}
*/

export default App