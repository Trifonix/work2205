const express = require('express');
const app = express();
const todoRoutes = require('./routes/todos');

app.use(express.json()); // Для парсинга JSON-запросов

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен, порт: ${PORT}`);
});

module.exports = app;
