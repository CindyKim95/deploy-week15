import React from "react";
import './style.css';

const Book = ({id, bookName, purchased, author, deleteButton}) => {
    const handleDelete = () => {
        deleteButton(id);
    }

    return (
        <div className='books-data'>
            <span>{bookName}</span>
            <span>{purchased}</span>
            <span>{author}</span>
            <span>
                <button className='btn btn-dark'>Edit</button>
                <button onClick={handleDelete} className='btn btn-dark'>Delete</button>
            </span>
        </div>
    )
}

export default Book