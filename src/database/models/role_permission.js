'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const RolePermission = sequelize.define('role_permission', {
    roleid: {
      type: DataTypes.UUID,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    permissionid: {
      type: DataTypes.UUID,
      references: {
        model: 'permissions',
        key: 'id'
      }
    },
  }, {
    hooks: {
      beforeCreate: rolepermission => {
        rolepermission.id = uuid();
      }
    }
  });
  RolePermission.associate = function (models) {

    RolePermission.hasMany(models.role, {
      foreignKey: 'roleid',
    });

    RolePermission.hasMany(models.permission, {
      foreignKey: 'permissionid',
    });
  };
  return RolePermission;
};
