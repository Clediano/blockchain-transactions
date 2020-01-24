const express = require('express');

const BlockchainTransaction = require('../../controllers/blockchain/transaction');
const AuthorizationToken = require('../../services/authentication/authentication.token');

const router = express.Router();

router.get('/get_transaction/:txid', BlockchainTransaction.getTransaction);
router.get('/get_transaction_by_block/:block', BlockchainTransaction.getTransactionIndexByBlock);
router.post('/new_transaction', AuthorizationToken.authorize, BlockchainTransaction.newTransaction);

module.exports = app => app.use('/transaction', router);
