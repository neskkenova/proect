// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
            setResponseMessage('Деректер сәтті жіберілді!');
            console.log(response.data);
        } catch (error) {
            setResponseMessage('Деректерді жіберу кезінде қате пайда болды.');
            console.error(error);
        }

        // Форма деректерін тазарту
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="container">
            <h2>Тіркелу Формасы</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Аты:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Электрондық пошта:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Хабарлама:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Жіберу</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default Register;
