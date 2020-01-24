const Transaction = require('../../services/blockchain/blockchain.transaction');

class TransactionController {
    getTransaction(req, res) {
        Transaction.getTransaction(req.params.txid)
            .then(transaction => {
                res.send(transaction);
            })
            .catch(err => {
                res.send(err);
            })
    };

    getTransactionIndexByBlock(req, res) {
        Transaction.getTransactionIndexByBlock(req.params.block)
            .then(transaction => {
                res.send(transaction);
            })
            .catch(err => {
                res.send(err);
            })
    };

    newTransaction(req, res) {
        Transaction.newTransaction(req.body)
            .then(newTransaction => {
                res.send(newTransaction);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = new TransactionController();
