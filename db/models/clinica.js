"use strict";
module.exports = (sequelize, DataTypes) => {
  const Clinica = sequelize.define(
    "Clinica",
    {
      nome: DataTypes.TEXT,
      faturamento_id: DataTypes.INTEGER
    },
    {}
  );
  Clinica.associate = function(models) {
    Clinica.hasMany(models.Endereco, {
      foreignKey: "clinica_id"
    });

    Clinica.belongsToMany(models.Dentista, {
      foreignKey: "clinica_id",
      through: "Participacao"
    });

    Clinica.belongsTo(models.Faturamento, {
      foreignKey: "faturamento_id"
    });
  };
  return Clinica;
};
