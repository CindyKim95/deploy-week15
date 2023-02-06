import React from "react";

const AddNewBook = ({ addBook }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    addBook(e.target.bookName.value,e.target.purchased.value,e.target.author.value);
    e.target.bookName.value = "";
    e.target.purchased.value = "";
    e.target.author.value = "";
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add Your Book!</h3>
        <input placeholder="Book" name="bookName" />
        <input placeholder="Purchased" name="purchased" />
        <input placeholder="Author" name="author" />
        <button onSubmit={handleOnSubmit} className='btn btn-dark'>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddNewBook;