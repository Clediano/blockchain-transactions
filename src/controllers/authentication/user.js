const User = require('../../services/authentication/authentication.user');

const Permission = require('../../database/models').permission;

const AuthenticationToken = require('../../services/authentication/authentication.token');

class UserController {
    createUser(req, res) {
        const {id: organizationid} = req.params;
        const {name, email, password} = req.body;

        User.create(name, email, password, organizationid)
            .then(user => {
                Permission.findAll()
                    .then(permissions => {
                        user.setPermissions(permissions)
                            .then(() => {
                                return res.status(200).send(user);
                            })
                            .catch(() => {
                                User.remove(user.dataValues.id)
                                    .then(() => {
                                        return res.status(400).send({ message: 'Ocorreu um erro ao criar o usuário.' })
                                    })
                                    .catch(err => {
                                        return res.status(400).send(err);
                                    });
                            });
                    })
                    .catch(err => {
                        return res.status(400).send(err);
                    });
            })
            .catch(err => {
                return res.send(err);
            });
    };

    authenticate(req, res) {
        const {email, password} = req.body;

        User.authenticate(email, password)
            .then(({dataValues: user}) => {
                const token = AuthenticationToken.generateToken({
                    user: user.email
                });
                res.send({
                    token: token,
                    authorization: user.permissions
                });
            })
            .catch(err => {
                res.status(400).send(err);
            });
    }
}

module.exports = new UserController();
