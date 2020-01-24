const Address = require('../../services/blockchain/blockchain.address');

class AddressesController {
    async createNewAddress(req, res) {
        const newAddress = await Address.createNewAddress();

        return res.send(newAddress);
    };

}

module.exports = new AddressesController();
