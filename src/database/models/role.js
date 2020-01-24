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
    Role.hasMany(models.user, {
      foreignKey: 'roleid',
    })
  };
  return Role;
};