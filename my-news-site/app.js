const express = require('express');
const app = express();
const PORT = 3000;

// Устанавливаем EJS как шаблонизатор
app.set('view engine', 'ejs');

// Подключаем статические файлы
app.use(express.static('public'));

// Подключаем маршруты
const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
