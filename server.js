const express = require('express');
const cors = require('cors');
const path = require('path'); // Модуль для роботи зі шляхами
const app = express();

// Render автоматично дасть порт у змінну process.env.PORT
// Якщо ми локально - то буде 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ВАЖЛИВО: Кажемо серверу роздавати файли з папки 'public' як статичні
app.use(express.static('public'));

// Наш API
app.get('/api/hello', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({
        message: "Привіт з хмари (Render)!",
        serverTime: currentTime,
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});