const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message: "hello address!" })
});

module.exports = app => app.use('/address', router);
