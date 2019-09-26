"use strict";
module.exports = (sequelize, DataTypes) => {
  const Paciente = sequelize.define(
    "Paciente",
    {
      nome: DataTypes.TEXT,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER
    },
    {}
  );
  Paciente.associate = function(models) {
    Paciente.belongsTo(models.Usuario, {
      foreignKey: "usuario_id"
    });

    Paciente.hasMany(models.Consulta, {
      foreignKey: "paciente_id"
    });
  };
  return Paciente;
};
