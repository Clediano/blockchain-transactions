'use strict';
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
  }, {});
  Role.associate = function (models) {

    Role.hasMany(models.user, {
      foreignKey: 'roleid',
    })
  };
  return Role;
};