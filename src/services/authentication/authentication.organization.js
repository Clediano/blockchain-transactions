const Organization = require('../../database/models').organization;

class AuthenticationOrganization {

    /**
     * @param name, type, cpf, cnpj, email
     * @returns {Promise<[Model, boolean]>}
     */
    create(name, type, cpf, cnpj, email) {
        return Organization.findOrCreate({
            where: {email},
            defaults: {name, type, cpf, cnpj, email}
        });
    }

    remove(id) {
        return Organization.destroy({where: {id}});
    }

}

module.exports = new AuthenticationOrganization();
