const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Роздаємо папку public (де лежить index.html)
app.use(express.static('public'));

// --- НОВА ЛОГІКА ---
// Масив із передбаченнями
const predictions = [
    "Сьогодні твій щасливий день! Ризикуй.",
    "Зроби перерву, ти занадто багато працюєш.",
    "Хтось думає про тебе прямо зараз.",
    "Успіх прийде, якщо ти виправиш баг у коді.",
    "Скуштуй щось нове на обід.",
    "Чекай приємних новин ввечері.",
    "Краще відкласти важливі рішення на завтра."
];

// Новий маршрут (API)
app.get('/api/prediction', (req, res) => {
    // 1. Вибираємо випадкове передбачення
    const randomIndex = Math.floor(Math.random() * predictions.length);
    const randomPrediction = predictions[randomIndex];

    // 2. Генеруємо випадкове "щасливе число" від 1 до 100
    const luckyNumber = Math.floor(Math.random() * 100) + 1;

    console.log(`[SERVER] Відправляю передбачення: ${randomPrediction}`);

    // 3. Відправляємо JSON клієнту
    res.json({
        text: randomPrediction,
        number: luckyNumber,
        category: "Daily Fortune"
    });
});
// -------------------

app.listen(PORT, () => {
    console.log(`Сервер "Оракул" запущено на порту ${PORT}`);
});