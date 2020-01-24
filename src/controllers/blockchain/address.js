const Address = require('../../services/blockchain/blockchain.address');

class AddressController {
    createNewAddress(req, res) {
        Address.createNewAddress()
            .then(newAddress => {
                res.send(newAddress);
            })
            .catch(err => {
                res.send(err);
            })
    };
}

module.exports = new AddressController();
