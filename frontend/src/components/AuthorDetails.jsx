import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'animate.css';

const AuthorDetails = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/authors/${id}`)
            .then(response => {
                setAuthor(response.data);
                return axios.get(`http://localhost:5000/books?author_id=${id}`);
            })
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching author:', error));
    }, [id]);

    if (!author) return <div className="container text-center">Loading...</div>;

    return (
        <div className="container">
            <div className="card mb-4 animate__animated animate__fadeIn">
                <img src={author.photo} className="card-img-top" alt={author.name} style={{ height: '300px', objectFit: 'cover' }} />
                <div className="card-body">
                    <h1 className="card-title">{author.name}</h1>
                    <p className="card-text"><strong>Date of Birth:</strong> {new Date(author.dateOfBirth).toLocaleDateString()}</p>
                    <h3>Books by this author:</h3>
                    <ul className="list-group">
                        {books.map(book => (
                            <li className="list-group-item" key={book._id}>
                                {book.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetails;
