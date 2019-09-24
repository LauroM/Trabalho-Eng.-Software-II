'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    login: DataTypes.TEXT,
    senha: DataTypes.TEXT
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};