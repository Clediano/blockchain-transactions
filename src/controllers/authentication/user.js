const User = require('../../services/authentication/authentication.user');
const AuthenticationToken = require('../../services/authentication/authentication.token');

class UserController {
    createUser(req, res) {
        const { email, password } = req.body;

        User.create(email, password)
            .then(newUser => {
                res.send(newUser);
            })
            .catch(err => {
                res.send(err);
            })
    };

    authenticate(req, res) {
        const { email, password } = req.body;

        User.authenticate(email, password)
            .then(user => {
                const token = AuthenticationToken.generateToken({
                    user: user.email,
                    authorization: [{
                        module: 'DOCUMENTS',
                        permissions: ['create', 'insert', 'update', 'delete']
                    }]
                })
                res.send({
                    token: token,
                    email: user.email,
                    authorization: [{
                        module: 'DOCUMENTS',
                        permissions: ['create', 'insert', 'update', 'delete']
                    }]
                })
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = new UserController();
