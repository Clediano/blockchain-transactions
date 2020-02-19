const express = require('express');
const routes = express.Router();

const multer = require('multer');
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);

const TransactionController = require('./controllers/organization/transaction');
const UserController = require('./controllers/authentication/user');
const OrganizationController = require('./controllers/authentication/organization');
const ArchiveController = require('./controllers/archive/archive');

const AuthenticationService = require('./services/security/security.token');

//Organization
routes.post('/organization', OrganizationController.createOrganization);

//User
routes.post('/user/:organizationid', UserController.createUser);
routes.post('/authentication', UserController.authenticate);

//Transaction
routes.post('/transaction', AuthenticationService.authorize, upload.single('file'), TransactionController.createTransaction);

//Archives
routes.post('/archive', AuthenticationService.authorize, upload.single('file'), ArchiveController.upload);
routes.get('/archive/:id', AuthenticationService.authorize, ArchiveController.findById);
routes.delete('/archive/:id', AuthenticationService.authorize, ArchiveController.delete);


module.exports = routes;
