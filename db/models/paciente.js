'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    nome: DataTypes.TEXT,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER
  }, {});
  Paciente.associate = function(models) {
    // associations can be defined here
  };
  return Paciente;
};