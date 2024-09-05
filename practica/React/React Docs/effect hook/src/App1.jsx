import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'


const App = () => {
  
const [notes, setNotes] = useState([])
const [newNote, setNewNote] = useState('')
const [showAll, setShowAll] = useState(true)


const hook = () => {
    console.log('effect');
    axios
    .get('http://localhost:3001/notes')      
    .then( 
      response =>{
    console.log('promise fulfilled')
    setNotes(response.data)
  })
}

useEffect(hook, [])
//now we can see how useEffect only takes 2 parameters. A function and an array.

//The function is the effect itself. If the second parameter is an array, then the effect only executes with the first render of the component, if there is any argument in the array then the function will execute every time the argument value changes


console.log('render', notes.length,'notes');

  return (
  <div>
    
  </div>    
  )
}
export default App
