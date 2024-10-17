import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';  
import Contact from './components/contact';
import Login from './components/login';
import Footer from './components/footer';
import UserList from './UserList'; // Импортируем компонент UserList
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
               
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<UserList />} /> {/* Добавляем маршрут для UserList */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
