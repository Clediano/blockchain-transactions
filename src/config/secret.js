const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  api_key:  process.env.CRYPTO_API_KEY,
  network: process.env.NETWORK,
  auth_key: process.env.AUTH_SECRET
};
