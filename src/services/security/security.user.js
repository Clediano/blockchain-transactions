const User = require('../../database/postgres/models').user;

const Crypto = require('../../helpers/crypto');

class SecurityUsers {

    create(name, email, password, organizationid) {
        const defaultData = {
            name,
            email,
            password: Crypto.hash(password),
            organizationid
        };
        return User.findOrCreate({where: {email}, defaults: {defaultData}});
    }

    remove(id) {
        return User.destroy({where: {id}});
    }

    authenticate(email, password) {
        return User.findOne({
            where: {
                email: email,
                password: Crypto.hash(password)
            },
            include: [
                {
                    association: 'permissions',
                    attributes: ["name", "description"],
                },
                {
                    association: 'organization',
                    attributes: ["name", "type", "email"]
                }
            ],
        });
    }


}

module.exports = new SecurityUsers();
