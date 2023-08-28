import AddBook from './components/AddBook.jsx'
import BookCard from './components/BookCard.jsx'
import React, { useState } from "react";


export default function Body() {
    const [books, setBooks] = useState([]);
    const [idCounter, setIdCounter] = useState(1);

    const handleAddBook = (newBook) => {
        const bookWithId = { ...newBook, id: idCounter };
        setIdCounter(idCounter + 1);
        setBooks([...books, bookWithId]);
    };

    const handleDeleteBook = (bookToDelete) => {
        const updatedBooks = books.filter((book) => book.id !== bookToDelete.id);
        setBooks(updatedBooks);
    };

    const handleToggleRead = (bookToToggle) => {
        const updatedBooks = books.map((book) =>
          book.id === bookToToggle.id
            ? { ...book, isRead: !book.isRead }
            : book
        );
        setBooks(updatedBooks);
      };

    return (
        <>
            <AddBook onAddBook={handleAddBook}/>
            <div className="body">
                {books.map((book, index) => (
                    <BookCard 
                        key={index} 
                        bookData={book}
                        onDelete={handleDeleteBook}
                        onToggleRead={handleToggleRead}
                    />
                ))}
            </div>
        </>
    )
}