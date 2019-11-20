"use strict";
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define(
    "Paciente",
    {
      nome: DataTypes.TEXT,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING
    },
    {}
  );
  Paciente.associate = function(models) {
    Paciente.belongsToMany(models.Clinica, {
      foreignKey: "paciente_id",
      through: "Clinica_Paciente"
    });

    Paciente.hasMany(models.Consulta, {
      foreignKey: "paciente_id"
    });
  };
  return Paciente;
};
