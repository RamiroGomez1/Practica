//Importamos la funcion useEffect
import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'

// the useEffect hook allows a component to connect and sincronize with external systems.
//Including, managing the web, DOM, animations, widgets, and other code that is not React

//the effect hook is the best tool to obtain server data

const App = () => {
  
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')
const [showAll, setShowAll] = useState(true)

  useEffect(
    //Primero se ejecuta el cuerpo de la funcion que define el componente, y asi se renderiza por primera vez el componente
    //Esta funcion se ejecuta inmediatamente luego de la renderizacion de la pagina
    
    
    () => {
      //se imprime effect
      console.log('effect');
      axios
      .get('http://localhost:3001/notes')
      //El comando axios.get comience con la obtencion de datos del servidor
      
      .then( 
        //.then registra la funcion
        response =>{
      console.log('promise fulfilled')
      setNotes(response.data)
      //esta funcion es basicamente un controlador de eventos para la operacion
      //lo que hace esta funcion es almacenar las notas recibidas del servidor en el estado mediante la funcion setNotes(response.data) 
    })
    
  }, [])
console.log('render', notes.length,'notes');

  return (
  <div>
    
  </div>    
  )
}
export default App
