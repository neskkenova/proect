// src/components/Home.js
import React from 'react';
import Card from './card';
import './home.css'; // Подключаем стили для главной страницы

const Home = () => {
    const cards = [
        { title: 'Әйелдерге', description: 'new' },
        { title: 'Ерлерге', description: 'new' },
        { title: 'Төлем', description: 'барлық тапсырыстарға' },
        { title: 'Жеткізу', description: 'тегін жеткізу' },
    ];

    return (
        <div className="home">
            <h1>Каталог</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default Home;
