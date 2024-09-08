import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    axios
    .post('http://localhost:3001/notes', noteObject)
    .then(response => {
      setNotes(notes.concat(response.data))
      setNewNote('')
    })
  }

  const handleNoteChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)




  const toggleImportance = (id) => {

    const url = `http://localhot:3001/notes/${id}`
    //La primer linea define la URL unica de cada recurso en funcion a su id
    
    const note = notes.find(n => n.id === id)
    //Aqui, el metodo find busca la nota que queremos modificar, para asignarla a la variable note

    const changedNote = {...note, important: !note.important }
    //Luego creamos un objeto que es copia exacta de la nota anterior, excepto por la propiedad important
    //que tiene su valor cambiado al contrario (true a false, o false a true)

    //Recordemos que object spread ( {...note} ) crea un clon del array
    //Pero cuando se especifica alguna de los valores que componen el array ( {...note, important: true} )
    //entonces el valor de la propiedad important del array especificado sera true



    axios.put(url, changedNote).then(response => {
      
      setNotes(notes
        //notes es establecido en una nueva array que contiene los mismo elementos de la array, excepto la nota modificada que se reemplaza por la version actualizada
        
        
        .map(note => note.id !== id ? note : response.data))
      //map crea un nuevo array
      //si note.id !== id es verdadero, copiamos el elemento de la funcion anterior a la nueva
      //si note.id !== id es falso, el elemento no es copiado y, en cambio, en el nuevo array este sera reemplazado por su version actualizada (variable note)
      
      })
  }





  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) =>
          <Note key={i}
           note={note}
           toggleImportance={() => toggleImportance(note.id)} />
           //Cada nota va a tener un boton, ese boton va a ejecutar toggleImportance con el id especifico de esa nota
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App 