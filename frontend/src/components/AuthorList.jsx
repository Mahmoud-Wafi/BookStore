import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'animate.css';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/authors')
            .then(response => setAuthors(response.data))
            .catch(error => console.error('Error fetching authors:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mb-4">Authors</h1>
            <div className="row">
                {authors.map(author => (
                    <div className="col-md-4 mb-4 animate__animated animate__fadeIn" key={author._id}>
                        <div className="card">
                            <img src={author.photo} className="card-img-top" alt={author.name} style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{author.name}</h5>
                                <Link to={`/authors/${author._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthorList;

