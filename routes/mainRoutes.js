
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
});

router.post('/nuevo', (req, res) => {
});

router.get('/historial', (req, res) => {
});

router.get('/recordatorio/:id', (req, res) => {
    const id = req.params.id;
});

module.exports =  router;