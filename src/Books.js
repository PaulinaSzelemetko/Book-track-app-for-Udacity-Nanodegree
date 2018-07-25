import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BooksCategories from './BooksCategories'


class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'none'};
    
        this.handleChange = this.handleChange.bind(this);
        
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this);
      }

    

    render() {    

        return (

            <ol className="books">
                {this.props.books.map((book) => (
                    <li key={book.id} className='book-list-item'>
                        <div className="book">
                            <div className="book-top" style={{backgroundImage: `url(${ book.imageLinks.thumbnail })`}}>
                                         
                            <div className="book-shelf-changer">
                            <select value={this.state.value} onChange={this.handleChange}>
                                     <option value="move" disabled>Move to...</option>
                                     <option value="currentlyReading">Currently Reading</option>
                                     <option value="wantToRead">Want to Read</option>
                                     <option value="read">Read</option>
                                     <option value="none">None</option>
                                     </select>
                                 </div>
                            </div>
                            <div className="book-title">{ book.title }</div>
                            <div className="book-authors">{ book.authors }</div>
                        </div>
                </li>
                ))}
            </ol>
        )
    }
}

export default Books

