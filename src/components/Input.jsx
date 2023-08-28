import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faFileLines } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";

export default function Input({AddBook}) {
    const [bookData, setBookData] = useState({
        title:'',
        author:'',
        pages:'',
        isRead:false,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    
        AddBook(bookData);
    
        // Clear form inputs
        setBookData({
          title: '',
          author: '',
          pages: '',
          isRead: false,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="inputs">
                <div>
                    <FontAwesomeIcon icon={faBook} className="icon" />
                    <label htmlFor="title">Title</label>
                </div>
                    <input
                        id="title"
                        placeholder="Title"
                        className="inputarea"
                        autoComplete="off"
                        onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                        value={bookData.title}
                    />
                    <div>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <label htmlFor="author">Author</label>
                    </div>
                    <input
                        id="author"
                        placeholder="Author"
                        className="inputarea"
                        autoComplete="off"
                        onChange={(e) => setBookData({ ...bookData, author: e.target.value })}
                        value={bookData.author}
                    />
                    <div>
                        <FontAwesomeIcon icon={faFileLines} className="icon" />
                        <label htmlFor="pages">Pages</label>
                    </div>
                    <input
                        type="number"
                        id="pages"
                        placeholder="Number of Pages"
                        min="0"
                        className="inputarea"
                        autoComplete="off"
                        onChange={(e) => setBookData({ ...bookData, pages: e.target.value })}
                        value={bookData.pages}
                    /> 
                </div>
                <div className="buttons">
                    <div className="completed">
                        <label htmlFor="completed">Finished the book? </label>
                        <input 
                            type="checkbox"
                            id="completed"
                            onChange={(e) => setBookData({ ...bookData, isRead: e.target.checked })}
                            checked={bookData.isRead}
                        />
                    </div>
                <button id="save" type="submit">Save</button>
            </div>
        </form>
    )
}