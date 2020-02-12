const User = require('../../database/models').user;

const Crypto = require('../../helpers/crypto');

class AuthenticationUsers {

    create(name, email, password, organizationid) {
        return User.create({name, email, password, organizationid});
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

module.exports = new AuthenticationUsers();
