import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'

class BooksApp extends React.Component {
  state = {
    shelfs: {
      currentlyReading: {
          label: 'Currently Reading'
      },
      wantToRead: {
          label: 'Want to Read'
      },
      read: {
          label: 'Read'
      }
  },
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(books);
    })

  }
  

  shelfBooks = (book) => {
    this.setState()
  }

  render() {
    return (
      <div className="app">
        <Books
          books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
