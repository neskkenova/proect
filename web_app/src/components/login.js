import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', formData);
            console.log(response.data); // Здесь можно сохранить токен
        } catch (error) {
            console.error('Ошибка входа:', error.response.data);
        }
    };

    return (
        <div className="container">
            <div className="login-container">
                <h2>Вход</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Пароль" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
