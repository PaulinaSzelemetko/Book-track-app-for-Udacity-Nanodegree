import React, { Component } from 'react'
import './App.css'
import Books from './Books'

class BooksCategories extends React.Component {

    render() {    

        return (
        <div className="list-books">
      
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
      


          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.currentlyReading.map((book) => (
                      <li key={book.id}>
                        <Books shelf={this.value} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
      
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.wantToRead.map((book) => (
                      <li key={book.id}>
                        <Books book={book} shelf={book.shelf} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
      
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {this.props.read.map((book) => (
                      <li key={book.id}>
                        <Books book={book} shelf={book.shelf} />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
      
            </div>
          </div>
      
         
        </div>
      )
    }}



export default BooksCategories