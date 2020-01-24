'use strict';

const uuid = require('uuid/v4');

module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('permission', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
  }, {
    hooks: {
      beforeCreate: permission => {
        permission.id = uuid();
      }
    }
  });
  permission.associate = function (models) {
    
  };
  return permission;
};