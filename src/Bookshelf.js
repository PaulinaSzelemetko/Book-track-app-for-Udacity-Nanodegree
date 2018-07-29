import React, { Component } from 'react'
import './App.css'
import Book from './Book'

const bookshelf = (props) => {

  return (
    <div className="list-books-content">
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.filter(book => book.shelf === props.shelfName).map((book) => (
              <li>
                <Book book={book} changeShelf={props.changeShelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>      
  )
}

export default bookshelf