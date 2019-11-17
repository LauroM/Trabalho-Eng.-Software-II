"use strict";
module.exports = (sequelize, DataTypes) => {
  const Faturamento = sequelize.define(
    "Faturamento",
    {
      mes: DataTypes.STRING,
      valor: DataTypes.INTEGER,
      clinica_id: DataTypes.INTEGER,
      dentista_id: DataTypes.INTEGER
    },
    {}
  );
  Faturamento.associate = function(models) {
    Faturamento.belongsTo(models.Dentista, {
      foreignKey: "dentista_id"
    });

    Faturamento.belongsTo(models.Clinica, {
      foreignKey: "clinica_id"
    });
  };
  return Faturamento;
};
