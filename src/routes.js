const express = require('express');
const routes = express.Router();

const AddressController = require('./controllers/blockchain/address');
const TransactionController = require('./controllers/blockchain/transaction');
const UserController = require('./controllers/authentication/user');
const OrganizationController = require('./controllers/authentication/organization');

const AuthenticationService = require('./services/authentication/authentication.token');

//Organization
routes.post('/organization', OrganizationController.createOrganization);

//User
routes.post('/user/:id', UserController.createUser);
routes.post('/user/authenticate', UserController.authenticate);

//Addresses
routes.get('/address', AddressController.createNewAddress);

//Transaction
routes.get('/transaction/block/:txid', TransactionController.getTransactionIndexByBlock);
routes.get('/transaction/:txid', TransactionController.getTransaction);
routes.post('/transaction', AuthenticationService.authorize, TransactionController.newTransaction);

module.exports = routes;
