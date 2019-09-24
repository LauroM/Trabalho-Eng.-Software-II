'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faturamento = sequelize.define('Faturamento', {
    mes: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {});
  Faturamento.associate = function(models) {
    // associations can be defined here
  };
  return Faturamento;
};