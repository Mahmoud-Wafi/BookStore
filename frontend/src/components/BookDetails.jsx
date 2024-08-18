import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'animate.css';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then(response => setBook(response.data))
            .catch(error => console.error('Error fetching book:', error));
    }, [id]);

    if (!book) return <div className="container text-center">Loading...</div>;

    return (
        <div className="container">
            <div className="card mb-4 animate__animated animate__fadeIn">
                <img src={book.photo} className="card-img-top" alt={book.name} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h1 className="card-title">{book.name}</h1>
                    <p className="card-text"><strong>Author:</strong> {book.author_id.name}</p>
                    <p className="card-text"><strong>Category:</strong> {book.category_id.name}</p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;

