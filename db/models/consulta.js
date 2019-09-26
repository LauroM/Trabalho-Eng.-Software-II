"use strict";
module.exports = (sequelize, DataTypes) => {
  const Consulta = sequelize.define(
    "Consulta",
    {
      descricao: DataTypes.TEXT,
      dataHora: DataTypes.DATE,
      dentista_id: DataTypes.INTEGER,
      paciente_id: DataTypes.INTEGER
    },
    {}
  );
  Consulta.associate = function(models) {
    Consulta.belongsTo(models.Dentista, {
      foreignKey: "dentista_id"
    });

    Consulta.belongsTo(models.Paciente, {
      foreignKey: "paciente_id"
    });
  };
  return Consulta;
};
