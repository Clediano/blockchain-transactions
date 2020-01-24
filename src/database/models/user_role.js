'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('user_role', {
    userid: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    roleid: {
      type: DataTypes.UUID,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
  }, {
    hooks: {
      beforeCreate: userrole => {
        userrole.id = uuid();
      }
    }
  });
  UserRole.associate = function (models) {
    UserRole.hasMany(models.role, {
      foreignKey: 'roleid',
    });

    UserRole.hasMany(models.user, {
      foreignKey: 'userid',
    })
  };
  return UserRole;
};
