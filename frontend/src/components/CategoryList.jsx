import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'animate.css';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="mb-4">Categories</h1>
            <div className="row">
                {categories.map(category => (
                    <div className="col-md-4 mb-4 animate__animated animate__fadeIn" key={category._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{category.name}</h5>
                                <Link to={`/categories/${category._id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
