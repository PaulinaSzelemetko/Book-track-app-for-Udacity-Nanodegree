import React from 'react'
import { Link, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(books);
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let updatedBook = book
      updatedBook.shelf = shelf
      this.setState((prevState) => ({ books: prevState.books.filter(b => b.id !== book.id).concat(updatedBook) }))
    })
  }
  
  render() {
    return (
      <div className="app">
       <Route exact path="/" render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Bookshelf books={this.state.books} shelfName="currentlyReading" title="Currently Reading" changeShelf = {this.changeShelf}/>
          <Bookshelf books={this.state.books} shelfName="wantToRead" title="Want to Read" changeShelf = {this.changeShelf}/>
          <Bookshelf books={this.state.books} shelfName="read" title="Read" changeShelf = {this.changeShelf}/>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
       )}/>
       <Route path="/search" render={({ history }) => (
          <Search books={this.state.books} changeShelf={this.changeShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
