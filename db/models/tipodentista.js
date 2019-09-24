'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoDentista = sequelize.define('tipoDentista', {
    descricao: DataTypes.TEXT
  }, {});
  tipoDentista.associate = function(models) {
    // associations can be defined here
  };
  return tipoDentista;
};