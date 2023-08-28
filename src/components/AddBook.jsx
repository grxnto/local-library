import React, { useState } from "react";
import Accordion from './Accordion.jsx';
import Input from './Input.jsx';

export default function AddBook({onAddBook}) {
    return (
        <div className='form'>
            <Accordion title="Add a New Book">
                <Input AddBook={onAddBook}/>
            </Accordion>
        </div>
    )
}