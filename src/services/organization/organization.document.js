const Document = require('../../database/postgres/models').document;

class OrganizationDocument {

    create(oidarchive, organizationid) {
        return Document.create({oidarchive, organizationid});
    };

    remove(id) {
        return Document.destroy({where: {id}});
    }
}

module.exports = new OrganizationDocument();
