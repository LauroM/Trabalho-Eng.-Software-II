'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dentista = sequelize.define('Dentista', {
    nome: DataTypes.TEXT,
    registro_cro: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    tipoDentista_id: DataTypes.INTEGER,
    faturamento_id: DataTypes.INTEGER
  }, {});
  Dentista.associate = function(models) {
    // associations can be defined here
  };
  return Dentista;
};