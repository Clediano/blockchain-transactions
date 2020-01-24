const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  
  api_key:  process.env.CRYPTO_API_KEY,
  
  network: process.env.NETWORK,
  
  auth_key: process.env.AUTH_SECRET,
  
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_pass: process.env.DB_PASS,
  db_host: process.env.DB_HOST,
  db_dialect: process.env.DB_DIALECT
};
