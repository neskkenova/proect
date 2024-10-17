const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Загружаем переменные окружения из .env файла

const app = express();
const PORT = process.env.PORT || 5000;

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(express.json());

// Пример маршрута
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    // Логика для регистрации пользователя
    res.send('Пользователь зарегистрирован');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
