const Organization = require('../../services/authentication/authentication.organization');
const Mailer = require('../../config/mailer');
const {mail_user, base_url_frontend} = require('../../config/secret');

class OrganizationController {
    createOrganization(req, res) {
        const {name, type, cpf, cnpj, email} = req.body;

        Organization.create(name, type, cpf, cnpj, email)
            .then(([organization, createdNewRegister]) => {
                if (createdNewRegister) {

                    let message = {
                        from: mail_user,
                        to: email,
                        subject: "Blockshare - Criação de usuário",
                        text: `Você criou uma organização no Blockshare. Você pode acessar este link: ${base_url_frontend}/${organization.id} para criar um usuário.`,
                    };

                    Mailer.sendMail(message, (err, response) => {
                        if (err) {
                            Organization.remove(organization.id)
                                .then(() => {
                                    return res.status(400).send({message: "Erro ao enviar e-mail de criação de usuário. Tente novamente mais tarde."});
                                })
                                .catch(err => {
                                    return res.status(400).send(err);
                                });
                        }
                        return res.status(200).send({
                            message: `Um e-mail foi enviado para ${email}. Clique no link e crie um usuário para a organização.`
                        });
                    });
                } else {
                    return res.status(400).send({
                        message: `O e-mail "${email}" já está sendo usado por outra organização.`
                    });
                }
            })
            .catch(err => {
                return res.status(400).send(err);
            });
    };
}

module.exports = new OrganizationController();
