import { useState, useEffect } from 'react'
import Note from './components/Note'
import Notification from './components/Error'
import noteService from './services/notes'
import axios from 'axios'
import './index.css'


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: '16px'
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Sciense, University of Helsinki 2024</em>
    </div>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

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

    noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
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
    
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important }
    
    noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
 
 
      //      alert(`the note '${note.content}' was already deleted from server`)
      //En lugar del alert, pongo un serErrorMessage. Esto hace basicamente lo mismo pero desde un mensaje de la aplicacion, no una alerta del navegador
    
      setErrorMessage(
      `Note ${note.content} was already removed from server`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const deleteNoteData = (id) => {
    event.preventDefault()

    noteService
      .del(id)
      .then( response => setNotes(notes.filter(note => note.id !== id)))
      .catch(error => {
        setErrorMessage(`Note ${note.content} was already removed from server`)

        setTimeout(() => { setErrorMessage(null) }, 5000)

        setNotes(notes.filter(n => n.id !== id))

        }
      )
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note, i) =>
          <Note
           key={i}
           note={note}
           toggleImportance={() => toggleImportance(note.id)} 
           deleteNoteData={deleteNoteData}/>
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type='submit'>save</button>
      </form>
      <Footer />
    </div>
  )
}

export default App 