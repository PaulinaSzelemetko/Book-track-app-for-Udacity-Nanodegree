import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })

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
