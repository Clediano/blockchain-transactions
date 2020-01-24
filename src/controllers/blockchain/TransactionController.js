const BlockchainTransaction = require('../../services/blockchain/blockchain.transaction');

const TRANSACTION_FEE = {
    MIN: 'min',
    MAX: 'max',
    NORMAL: 'average'
}

class TransactionController {
    async getTransaction(req, res) {
        const { txid } = req.params;

        const transaction = await BlockchainTransaction.getTransaction(txid);

        return res.send(transaction);
    };

    async newTransaction(req, res) {
        const { data, priority = "NORMAL" } = req.body;

        const { payload } = await BlockchainTransaction.getTransactionsFee();

        const newTransaction = await BlockchainTransaction.newTransaction(
            [{
                "address": "mqxb9QK3bYSdG89em1S7Yw7eVnmgPU41YK",
                "value": 0.00009
            }],
            [{
                "address": "mqxb9QK3bYSdG89em1S7Yw7eVnmgPU41YK",
                "value": 0.00009
            }],
            {
                "address": "mqxb9QK3bYSdG89em1S7Yw7eVnmgPU41YK",
                "value": payload[TRANSACTION_FEE[priority]]
            },
            ["cMhXAyYty3wFf6nWGg9XRMRAdNQy2JT8spx9sn8abZpbZBv6ZCJa"],
            {
                data: data
            }
        );
        return res.send(newTransaction);
    };

    async getTransactionsFee(req, res) {
        const fee = await BlockchainTransaction.getTransactionsFee();

        return res.send(fee);
    };

}

module.exports = new TransactionController();
