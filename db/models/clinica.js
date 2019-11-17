"use strict";
module.exports = (sequelize, DataTypes) => {
  const Clinica = sequelize.define(
    "Clinica",
    {
      nome: DataTypes.TEXT
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

    Clinica.hasMany(models.Faturamento, {
      foreignKey: "clinica_id"
    });
  };
  return Clinica;
};
