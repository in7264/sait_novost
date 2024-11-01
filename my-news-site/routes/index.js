const express = require('express');
const router = express.Router();

// Массив новостей
const newsList = [
    {
        title: 'Первая новость',
        content: 'Это первая новость на нашем сайте. Она показывает базовую функциональность сайта.',
        date: '2024-11-01'
    },
    {
        title: 'Вторая новость',
        content: 'Эта новость содержит дополнительную информацию и служит примером для тестирования.',
        date: '2024-11-01'
    },
    {
        title: 'Третья новость',
        content: 'Третья новость помогает проверить стилизацию и отображение нескольких новостей.',
        date: '2024-11-01'
    }
];

// Главная страница
router.get('/', (req, res) => {
    // Передача массива newsList в шаблон index.ejs
    res.render('index', { title: 'Главная страница новостей', newsList: newsList });
});

module.exports = router;
