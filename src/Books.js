import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Books extends React.Component {


    
    render() {

        return (

            <ol className="books">
                {this.props.books.map((book) => (
                    <li key={book.id} className='book-list-item'>
                        <div className="book">
                            <div className="book-top" style={{backgroundImage: `url(${ book.imageLinks.thumbnail })`}}>
                                         
                            <div className="book-shelf-changer">
                                     <select>
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

