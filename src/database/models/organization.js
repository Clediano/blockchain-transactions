'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define('organization', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.ENUM,
            values: ['FISICA', 'JURIDICA'],
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cnpj: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            },
            set(email) {
                this.setDataValue('email', email.toString().toLowerCase());
            }
        },
    }, {
        hooks: {
            beforeCreate: organization => {
                organization.id = uuid();
            }
        }
    });
    Organization.associate = function (models) {

        Organization.hasMany(models.document, {
            foreignKey: 'organizationid',
        });

        Organization.hasOne(models.wallet, {
            foreignKey: 'organizationid',
        });

        Organization.hasMany(models.user, {
            foreignKey: 'organizationid',
            as: 'users'
        });

    };
    return Organization;
};