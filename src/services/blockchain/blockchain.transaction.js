const blockchain = require('../../config/blockchain');

class BlockchainTransaction {
    /**
     * Transactions Txid Endpoint
     *
     * @async
     * @desc The Transaction Txid Endpoint returns detailed information about a given transaction based on its id.
     *
     * @param {string} txId - Id of the transaction in blockchain.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransaction(txId, queryParams = {}) {
        return blockchain.transaction.getTransaction(txId, queryParams)
            .then(result => result)
            .catch(err => err);
    };

    /**
     * Creating Transactions Endpoint
     *
     * @async
     * @desc The New Transaction Endpoint combines the other three endpoints: Create, Sign and Send Endpoints.
     *      Users should provide the inputs and outputs fields with the corresponding data, as well as the fee and the
     *      wifs(private ECDSA keys) of the addresses. Therefore, the endpoint creates, signs and broadcasts the new
     *      transaction to the Blockchain.
     *
     * @param {Array} inputs
     * @param {Array} outputs
     * @param {object<{number} value>} fee
     * @param {Array} wifs
     * @param {object} [optData] - Optional data.
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    newTransaction(inputs, outputs, fee, wifs, optData = {}, queryParams = {}) {
        return blockchain.transaction.newTransaction(inputs, outputs, fee, wifs, optData, queryParams)
            .then(result => result)
            .catch(err => err);
    }

    /**
     * Transactions Fee Endpoint
     *
     * @async
     * @desc Transactions Fee Endpoint gives information about the fees for all transactions included in the last 70
     *      blocks. min shows the lowest fee, max is the highest and average - the average fee. recommended is the fee
     *      that we consider as the one that corresponds to a cheap and fast execution. However, it is only a suggestion
     *      and should be used at users' sole discretion. average_bytes represents the average size of the transactions
     *      in bytes and is used for the calculations of the recommended fee price. All fees are in bch.
     *
     * @param {object} [queryParams] - Additional query parameters.
     *
     * @returns {*|Promise<any | never>}
     */
    getTransactionsFee(queryParams = {}) {
        return blockchain.transaction.getTransactionsFee(queryParams)
        .then(result => result)
        .catch(err => err);
    }

}

module.exports = new BlockchainTransaction();