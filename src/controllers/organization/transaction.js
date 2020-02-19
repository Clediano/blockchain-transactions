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

            Archive.create({hash: Crypto.hashBuffer(file), filename, mimetype, size, file})
                .then(archive => {
                    fs.unlink(req.file.path, err => {
                        if (err) {
                            Archive.remove(archive._id.toHexString());
                            return res.status(400).send({
                                message: 'Ocorreu um erro ao criar uma nova transação.',
                                details: err
                            });
                        }
                    });

                    BlockchainTransaction.newTransaction({data: archive.hash}, organization)
                        .then(({payload: transaction}) => {
                            Document.create(archive._id.toHexString(), organization)
                                .then(({dataValues: document}) => {
                                    OrganizationTransaction.create({
                                        txid: transaction.txid,
                                        confirmed: false,
                                        documentid: document.id
                                    }).then(({dataValues: organizationTransaction}) => {
                                        return res.status(200).send(organizationTransaction);
                                    }).catch(err => {
                                        return res.status(400).send({
                                            message: 'Ocorreu um erro ao criar o documento.',
                                            details: err
                                        });
                                    })
                                })
                                .catch(err => {
                                    return res.status(400).send({
                                        message: 'Erro ao registrar o documento.',
                                        details: err
                                    });
                                });
                        })
                        .catch(err => {
                            return res.status(400).send({
                                message: 'Erro ao salvar o arquivo, por favor, tente novamente.',
                                details: err
                            });
                        });
                })
                .catch(err => {
                    return res.status(400).send({
                        message: 'Erro ao salvar o arquivo, por favor, tente novamente.',
                        details: err
                    });
                });
        });
    }

    getTransaction(req, res) {
        BlockchainTransaction.getTransaction(req.params.txid)
            .then(transaction => {
                return transaction;
            })
            .catch(err => {
                return res.send(err);
            })
    };
}

module.exports = new TransactionController();
