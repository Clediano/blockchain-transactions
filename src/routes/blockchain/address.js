const express = require('express');

const BlockchainAddress = require('../../controllers/blockchain/address');

const router = express.Router();

router.get('/create_new_address', BlockchainAddress.createNewAddress);

module.exports = app => app.use('/address', router);
