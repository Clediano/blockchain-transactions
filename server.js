const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const helmet = require('helmet');
const { port } = require('./src/config/secret');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

require('./src/routes/blockchain/address')(app);
require('./src/routes/blockchain/transaction')(app);
require('./src/routes/authentication/user')(app);

app.listen(port, () => {
    console.log('Serviço iniciado com sucesso! Porta: ' + port)
});