'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define('Endereco', {
    logradouro: DataTypes.TEXT,
    bairro: DataTypes.TEXT,
    cidade: DataTypes.TEXT,
    uf: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.TEXT,
    clinica_id: DataTypes.INTEGER
  }, {});
  Endereco.associate = function(models) {
    // associations can be defined here
  };
  return Endereco;
};