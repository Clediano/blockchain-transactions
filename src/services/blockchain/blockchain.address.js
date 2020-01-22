const blockchain = require('../../config/blockchain');

class BlockchainWallet {

    createNewAddress() {
        return blockchain.address.generateAddress()
            .then(result => result)
            .catch(err => err);
    };

    
    
}

module.exports = new BlockchainWallet();