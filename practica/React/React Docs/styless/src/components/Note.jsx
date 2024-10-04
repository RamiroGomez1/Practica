const Note = ({ note, toggleImportance, deleteNoteData }) => {
  const label = note.important
    ? 'make not important' : 'make important'


  return (
    <div>
      <ul>
        <li key={note.id} className="note">
          {note.content}
          <button onClick={toggleImportance}>{label}</button>
          <button onClick={() => deleteNoteData(note.id)}>Delete</button>
        </li>
      </ul>
    </div>
    )
  }

export default Note