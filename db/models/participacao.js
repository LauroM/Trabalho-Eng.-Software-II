'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participacao = sequelize.define('Participacao', {
    clinica_id: DataTypes.INTEGER,
    dentista_id: DataTypes.INTEGER
  }, {});
  Participacao.associate = function(models) {
    // associations can be defined here
  };
  return Participacao;
};