const express = require('express');
const routes = express.Router();

const AddressController = require('./controllers/blockchain/address');
const TransactionController = require('./controllers/blockchain/transaction');

//Addresses
routes.get('/address/create_new_address', AddressController.createNewAddress);

//Transaction
routes.get('/transaction/get_transaction_by_block/:txid', TransactionController.getTransactionIndexByBlock);
routes.get('/transaction/get_transaction/:txid', TransactionController.getTransaction);
routes.post('/transaction/new_transaction', TransactionController.newTransaction);

module.exports = routes;
