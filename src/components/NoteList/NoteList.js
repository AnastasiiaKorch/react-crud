import './NoteList.css';
import NoteItem from "./NoteItem/NoteItem";

export default function NoteList(props){
    const { notes, deleteHandler } = props;

    return (
        <ul className='app__notes-list'>
            {notes.map((note) => <NoteItem key={note.id} note={note} deleteHandler={deleteHandler} />)}
        </ul>
    )
}