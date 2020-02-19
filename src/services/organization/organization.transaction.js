const Transaction = require('../../database/postgres/models').transaction;

class OrganizationTransaction {

    create(transaction) {
        return Transaction.create(transaction);
    };

}

module.exports = new OrganizationTransaction();
