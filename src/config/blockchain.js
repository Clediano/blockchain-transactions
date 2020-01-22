const { CRYPTO_API_KEY, NETWORK } = require('./secret');
const CryptoApis = require('cryptoapis.io');

const caClient = new CryptoApis(CRYPTO_API_KEY).BC.BTC;
caClient.switchNetwork(NETWORK);

module.exports = caClient

