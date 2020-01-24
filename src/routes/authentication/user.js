const express = require('express');

const User = require('../../controllers/authentication/user');

const router = express.Router();

router.post('/create_user', User.createUser);
router.post('/authenticate', User.authenticate);

module.exports = app => app.use('/user', router);