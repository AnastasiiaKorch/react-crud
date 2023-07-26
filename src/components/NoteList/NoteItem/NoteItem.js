

export default function NoteItem(props) {
    const {note, deleteHandler} = props;

    const clickHandler = () =>{
        deleteHandler(note.id)
    }

    return (
        <li className='list__item item'>

            <div className='item__content'>{note.content}</div>
            <button onClick={clickHandler} className='item__btn'></button>

        </li>
    )
}