const blockchain = require('../../config/blockchain');

const TRANSACTION_FEE = {
    MIN: 'min',
    MAX: 'max',
    NORMAL: 'average'
};

class BlockchianTransaction {

    /**
     * 
     * @param {String} txid Id of the transaction in blockchain
     */
    getTransaction(txid) {
        return blockchain.transaction.getTransaction(txid)
            .then(result => result)
            .catch(err => err);
    };

    /**
     * 
     * @param {String} block Block height or block hash in blockchain
     */
    getTransactionIndexByBlock(block) {
        return blockchain.transaction.getTransactionIndexByBlock(block)
            .then(result => result)
            .catch(err => err);
    };

    /**
     * 
     * @param {Object} body Object with data string and priority (MIN, MAX or NORMAL - default)
     */
    async newTransaction(body) {
        const { data, priority = "NORMAL" } = body;

        const { payload } = await this.getTransactionsFee();

        return blockchain.transaction.newTransaction(
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
    };

    getTransactionsFee() {
        return blockchain.transaction.getTransactionsFee()
            .then(result => result)
            .catch(err => err);
    };

}

module.exports = new BlockchianTransaction();
