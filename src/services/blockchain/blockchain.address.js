const blockchain = require('../../config/blockchain');

class BlockchainAddress {

    createNewAddress() {
        return blockchain.address.generateAddress()
            .then(result => result)
            .catch(err => err);
    };

}

module.exports = new BlockchainAddress();
