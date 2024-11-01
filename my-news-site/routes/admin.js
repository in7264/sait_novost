const express = require('express');
const router = express.Router();

// Панель администратора
router.get('/', (req, res) => {
    res.render('admin', { title: 'Админ-панель' });
});

module.exports = router;
