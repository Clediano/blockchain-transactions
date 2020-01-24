const crypto = require('crypto');

const alg = 'aes-256-ctr';
const pwd = 'HuxKr9zi@tov!xDAy%qifLCMU@eZvd';

class Crypto {
    encript(string) {
        const cipher = crypto.createCipher(alg, pwd);
        const crypted = cipher.update(string, 'utf8', 'hex')

        return crypted;
    }

    decript(string) {
        const decipher = crypto.createDecipher(alg, pwd);
        const decrypted = decipher.update(string, 'hex', 'utf8');

        return decrypted;
    }

    hash(string) {
        const hash = crypto.createHash('sha256');
        const hashed = hash.update(string, 'utf8');

        return hashed;
    }
}

module.exports = new Crypto();