import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'animate.css';

const CategoryDetails = () => {
    const { id } = useParams();
    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:5000/categories/${id}`);
                setCategory(response.data);
            } catch (error) {
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryDetails();
    }, [id]);

    if (loading) return <div className="container text-center"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
    if (error) return <div className="container text-center"><div className="alert alert-danger" role="alert">{error}</div></div>;
    if (!category) return <div className="container text-center"><div className="alert alert-warning" role="alert">Category not found.</div></div>;

    return (
        <div className="container">
            <div className="card mb-4 animate__animated animate__fadeIn">
                <div className="card-body">
                    <h1 className="card-title mb-4">{category.name}</h1>
                    <h3 className="mb-4">Books in this category:</h3>
                    <div className="row">
                        {category.books.length > 0 ? (
                            category.books.map((book, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card">
                                        <img src={book.photo} className="card-img-top" alt={book.name} style={{ height: '200px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{book.name}</h5>
                                            <p className="card-text">Author: {book.author || 'Unknown'}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No books found in this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;


