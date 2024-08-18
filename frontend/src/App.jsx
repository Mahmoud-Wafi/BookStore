
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthorList from './components/AuthorList';
import BookList from './components/BookList';
import CategoryList from './components/CategoryList';
import AuthorDetails from './components/AuthorDetails';
import BookDetails from './components/BookDetails';
import CategoryDetails from './components/CategoryDetails';
import SearchResults from './components/SearchResults';


const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/authors" element={<AuthorList />} />
                    <Route path="/books" element={<BookList />} />
                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/authors/:id" element={<AuthorDetails />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                    <Route path="/categories/:id" element={<CategoryDetails />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/" element={<BookList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
