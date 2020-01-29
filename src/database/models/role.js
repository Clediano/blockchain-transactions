'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('role', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    }, {
        hooks: {
            beforeCreate: permission => {
                permission.id = uuid();
            }
        }
    });
    Role.associate = function (models) {
        Role.belongsToMany(models.user, {
            through: 'user_roles',
            as: 'users',
            foreignKey: 'roleid'
        });

        Role.belongsToMany(models.permission, {
            through: 'role_permissions',
            as: 'permissions',
            foreignKey: 'roleid'
        });

    };
    return Role;
};