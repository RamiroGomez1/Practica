import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  //Agreguemos un nuevo estado para almacenar la entrada enviada por el usuario
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) // --> configuremos newNote como el valor de input

  const addNote = (event) => {
    event.preventDefault()
    
    //Primero, creamos un nuevo objeto para la nota llamado noteObject.
    //Este recibira el contenido del estado newNote
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    
    //La nueva nota se agrega a la lista de notas usando el metodo de matriz concat
    setNotes(notes.concat(noteObject))
    //Se reestablece el valor del elemento de entrada controlado (input) llamando a la funcion setNewNote
    setNewNote('')
  }
  
  //Para habilitar la edicion del input, tenemos que registrar un controlador de eventos que sincronice los cambios realizados en la entrada con el estado del componente
  
  
  const handleNoteChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
//Este controlador, al pasarse en el atributo onChange del elemento input, es llamado cada vez que ocurre un cambio en el elemento input

//La propiedad target de 'event' ahora corresponde al elemento input controlado
// Y event.target.value es el valor de entrada del elemento controlado input

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>  
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App 