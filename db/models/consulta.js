'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define('Consulta', {
    descricao: DataTypes.TEXT,
    dataHora: DataTypes.DATE,
    dentista_id: DataTypes.INTEGER,
    paciente_id: DataTypes.INTEGER
  }, {});
  Consulta.associate = function(models) {
    // associations can be defined here
  };
  return Consulta;
};