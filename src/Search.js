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
          this.setState({ books: books });
        }
      })
    }
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