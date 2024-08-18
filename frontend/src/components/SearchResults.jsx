import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const [results, setResults] = useState({
        books: [],
        authors: [],
        categories: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            setError(null);

            try {
                const [booksRes, authorsRes, categoriesRes] = await Promise.all([
                    axios.get(`http://localhost:5000/books?search=${query}`),
                    axios.get(`http://localhost:5000/authors?search=${query}`),
                    axios.get(`http://localhost:5000/categories?search=${query}`)
                ]);
                setResults({
                    books: booksRes.data,
                    authors: authorsRes.data,
                    categories: categoriesRes.data
                });
            } catch (err) {
                setError('Error fetching search results');
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    if (loading) return <div className="container text-center">Loading...</div>;
    if (error) return <div className="container text-center alert alert-danger">{error}</div>;

    return (
        <div className="container">
            <h1 className="mb-4">Search Results for "{query}"</h1>
            <h2>Books</h2>
            <div className="row">
                {results.books.length > 0 ? (
                    results.books.map(book => (
                        <div className="col-md-4 mb-4" key={book._id}>
                            <div className="card">
                                <img src={book.photo} className="card-img-top" alt={book.name} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.name}</h5>
                                    <p className="card-text">Author: {book.author_id.name}</p>
                                    <p className="card-text">Category: {book.category_id.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books found.</p>
                )}
            </div>

            <h2>Authors</h2>
            <div className="row">
                {results.authors.length > 0 ? (
                    results.authors.map(author => (
                        <div className="col-md-4 mb-4" key={author._id}>
                            <div className="card">
                                <img src={author.photo} className="card-img-top" alt={author.name} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{author.name}</h5>
                                    <a href={`/authors/${author._id}`} className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No authors found.</p>
                )}
            </div>

            <h2>Categories</h2>
            <div className="row">
                {results.categories.length > 0 ? (
                    results.categories.map(category => (
                        <div className="col-md-4 mb-4" key={category._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{category.name}</h5>
                                    <a href={`/categories/${category._id}`} className="btn btn-primary">View Details</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No categories found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
