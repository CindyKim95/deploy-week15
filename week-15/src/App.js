import React, { useEffect, useState } from 'react';
import './App.css';
import './style.css';
import AddNewBook from './AddNewBook';
import Book from './Book';

const App = () => {
  const [books, setUsers] = useState([]);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async  () => {
    await fetch('https://63af68ad649c73f572bb3926.mockapi.io/Week12FinalProject_API/books')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    });
  };

  const addBook = async (bookName, purchased, author) => {
    await fetch("https://63af68ad649c73f572bb3926.mockapi.io/Week12FinalProject_API/books", {
      method: "POST",
      body: JSON.stringify({
        bookName: bookName,
        purchased: purchased,
        author: author
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((books) => [...books, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteButton = async (id) => {
    await fetch(`https://63af68ad649c73f572bb3926.mockapi.io/Week12FinalProject_API/books/${id}`, {
      method: 'DELETE',
    }) .then((res) => {
      if (res.status !== 200) {
        return;
      } else {
        setUsers(
          books.filter((user) => {
            return user.id !== id;
          })
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

// const editButton = async () => {
//   const editMe = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       bookName: bookName,
//       purchased: purchased,
//       author: author
//     })
//   }
// }

  return (
    <div className='App'>
      <h3>Keep Track of Books You've Read</h3>

      

      <br></br>

      <AddNewBook addBook={addBook} />

      <div>
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            bookName={book.bookName}
            purchased={book.purchased}
            author={book.author}
            deleteButton={deleteButton}
          />
        ))}
      </div>
    </div>
  );
};

export default App


// Notes:
// You can take out import logohttps://63af68ad649c73f572bb3926.mockapi.io/Week12FinalProject_API/books and
// import React, { Component } from 'react';
// Take out everything inside the function App() and input your own codes
// You can also rename App() and change to
// class ''' extends Component
// dont forget in the end to add export default '''