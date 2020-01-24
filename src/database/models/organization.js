'use strict';

module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
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
  }, {});
  Organization.associate = function (models) {

    Organization.hasMany(models.document, {
      foreignKey: 'organizationid',
    });

    Organization.hasOne(models.wallet, {
      foreignKey: 'organizationid',
    });

  };
  return Organization;
};