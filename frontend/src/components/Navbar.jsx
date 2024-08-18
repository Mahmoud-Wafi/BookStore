import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            navigate(`/search?query=${query}`);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Library</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/authors">Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/books">Books</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">Categories</Link>
                    </li>
                </ul>
                <form className="form-inline ml-auto" onSubmit={handleSearch}>
                    <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
