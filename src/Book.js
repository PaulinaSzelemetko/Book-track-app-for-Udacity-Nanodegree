import React, { Component } from 'react'
import './App.css'

const book = (props) => {

    const book = props.book;

    const onBookUpdate = (event) => {
        props.changeShelf(book, event.target.value);
    }

    return (    

        <div className="book" id={book.id}>
            <div className="book-top">
                <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : window.location.protocol + '//' + window.location.host +'/img/default-cover.png' }")` }}></div>          
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={onBookUpdate}>
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
    )
}

export default book