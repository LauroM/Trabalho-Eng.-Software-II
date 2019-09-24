'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clinica = sequelize.define('Clinica', {
    nome: DataTypes.TEXT,
    faturamento_id: DataTypes.INTEGER
  }, {});
  Clinica.associate = function(models) {
    // associations can be defined here
  };
  return Clinica;
};