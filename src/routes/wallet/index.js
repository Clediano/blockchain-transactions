const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: "hello wallet!" })
});

module.exports = app => app.use('/wallet', router);
