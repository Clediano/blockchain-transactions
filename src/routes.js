const express = require('express');
const routes = express.Router();

const AddressesController = require('./controllers/blockchain/AddressesController');
const TransactionController = require('./controllers/blockchain/TransactionController');

//Addresses
routes.get('/address/create_new_address', AddressesController.createNewAddress);

//Transaction
routes.get('/transaction/get_transaction/:txid', TransactionController.getTransaction);
routes.post('/transaction/create_transaction', TransactionController.newTransaction);
routes.get('/transaction/get_transactions_fee', TransactionController.getTransactionsFee);


module.exports = routes;
