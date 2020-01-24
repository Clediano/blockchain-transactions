'use strict';
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
  }, {});
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
