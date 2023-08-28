import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, 
        faXmark,
        faTrashCan,
        faUser, 
        faFileLines 
} from '@fortawesome/free-solid-svg-icons'

export default function BookCard({ bookData, onDelete, onToggleRead }) {
    return (
      <div className="book">
        <div className="cardtitle">
            <h2>{bookData.title}</h2>
        </div>
        <div><FontAwesomeIcon icon={faUser} className="cardicon"/> {bookData.author}</div>
        <p><FontAwesomeIcon icon={faFileLines} className="cardicon"/> {bookData.pages}</p>
        <p>Completed: {bookData.isRead ? <FontAwesomeIcon icon={faSquareCheck}/> : <FontAwesomeIcon icon={faXmark}/>}</p>
        <div className='buttoncard'>
            <button id="readtoggle" onClick={() => onToggleRead(bookData)}>Read</button>
            <button id="delete" onClick={() => onDelete(bookData)}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      </div>
    );
}
  
