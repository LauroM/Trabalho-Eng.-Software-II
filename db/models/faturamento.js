"use strict";
module.exports = (sequelize, DataTypes) => {
  const Faturamento = sequelize.define(
    "Faturamento",
    {
      mes: DataTypes.STRING,
      valor: DataTypes.INTEGER
    },
    {}
  );
  Faturamento.associate = function(models) {
    Faturamento.hasMany(models.Clinica, {
      foreignKey: "faturamento_id"
    });

    Faturamento.hasMany(models.Dentista, {
      foreignKey: "faturamento_id"
    });
  };
  return Faturamento;
};
