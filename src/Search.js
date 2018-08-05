import React, { Component } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  state = {
    books: []
  }
  
  updateQuery = (query) => {
    let books = [];
    if(query === "") {
      this.setState({books: []})
    } else {
      BooksAPI.search(query).then((data) => {
        if(data.error) {
          this.setState({ books: [] });
        } else {
          books = books.concat(data);
          books = books.map((book) => this.setShelf(book));
          this.setState({ books: books });
        }
      })
    }
  }

  setShelf = (searchBook) => {
    for(let i = 0; i < this.props.books.length; i++) {
      if(searchBook.id === this.props.books[i].id) {
        searchBook.shelf = this.props.books[i].shelf;
        return searchBook;
      }
    }
    searchBook.shelf = 'none';
    return searchBook;
  }

  render() {
    return (   

    <div className="search">
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search books..." onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
      </div>
      <div className="results">
        <ol className="books-grid">
          {this.state.books.map((book) => (
            <li>
              <Book book={book} changeShelf={this.props.changeShelf}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )}
}


export default Search