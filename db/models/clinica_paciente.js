'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clinica_Paciente = sequelize.define('Clinica_Paciente', {
    paciente_id: DataTypes.INTEGER,
    clinica_id: DataTypes.INTEGER
  }, {});
  Clinica_Paciente.associate = function(models) {
    // associations can be defined here
  };
  return Clinica_Paciente;
};