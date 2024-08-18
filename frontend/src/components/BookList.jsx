import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'animate.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mb-4">Books</h1>
            <div className="row">
                {books.map(book => (
                    <div className="col-md-4 mb-4 animate__animated animate__fadeIn" key={book._id}>
                        <div className="card">
                            <img src={book.photo} className="card-img-top" alt={book.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text">Author: {book.author_id.name}</p>
                                <p className="card-text">Category: {book.category_id.name}</p>
                                <Link to={`/books/${book._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;


