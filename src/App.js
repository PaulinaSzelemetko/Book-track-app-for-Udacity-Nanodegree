import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksCategories from './BooksCategories'
import Books from './Books'


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

 
  render() {
    return (
      <div className="app">
        <BooksCategories
            currentlyReading={this.state.books.filter((book => book.shelf === "currentlyReading"))}
            read={this.state.books.filter((book => book.shelf === "read"))}
            wantToRead={this.state.books.filter((book => book.shelf === "wantToRead"))}
            />
        <Books
          books={this.state.books}/>
      </div>
    )
  }

  onBookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      let newBook = book
      newBook.shelf = shelf
      // remove book from state
      // add the updated book to state
      this.setState((prevState) => ({ books: prevState.books.filter(b => b.id !== book.id).concat(newBook) }))
    })
  }
}

export default BooksApp
