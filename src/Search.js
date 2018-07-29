import React, { Component } from 'react'
import './App.css'
import { Link } from "react-router-dom";
import Book from './Book'


const search = (props) => {

    const book = props.book;

    return (    

        <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                          <input type="text" placeholder="Search books..."/>
                    </div>
                </div>
        </div>
    )}


export default search