const Crypto = require('../../helpers/crypto');
const BlockchainTransaction = require('../../services/blockchain/blockchain.transaction');
const OrganizationTransaction = require('../../services/organization/organization.transaction');
const Archive = require('../../services/archive/archive.upload');
const Document = require('../../services/organization/organization.document');

const fs = require('fs');

class TransactionController {

    createTransaction(req, res) {
        fs.readFile(req.file.path, async (err, file) => {

            const {filename, mimetype, size} = req.file;
            const organization = req.organizationid;

            if (err) {
                return res.status(400).send({message: 'Erro ao ler o arquivo, por favor, tente novamente.'});
            }

            const archive = await Archive.create({hash: Crypto.hashBuffer(file), filename, mimetype, size, file});

            if (archive) {
                fs.unlink(req.file.path, err => {
                    if (err) {
                        Archive.remove(archive._id.toHexString());
                        return res.status(400).send({
                            message: 'Ocorreu um erro ao criar uma nova transação.',
                            details: err
                        });
                    }
                });
            } else {
                return res.status(400).send({message: 'Erro ao salvar o arquivo, por favor, tente novamente.'});
            }

            const document = await Document.create(archive._id.toHexString(), organization);

        });
    }

    getTransaction(req, res) {
        BlockchainTransaction.getTransaction(req.params.txid)
            .then(transaction => {
                res.send(transaction);
            })
            .catch(err => {
                res.send(err);
            })
    };

    getTransactionIndexByBlock(req, res) {
        BlockchainTransaction.getTransactionIndexByBlock(req.params.block)
            .then(transaction => {
                res.send(transaction);
            })
            .catch(err => {
                res.send(err);
            })
    };

    newTransaction(req, res) {
        BlockchainTransaction.newTransaction(req.body)
            .then(newTransaction => {
                res.send(newTransaction);
            })
            .catch(err => {
                res.send(err);
            })
    }
}

module.exports = new TransactionController();
