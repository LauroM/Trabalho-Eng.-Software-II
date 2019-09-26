"use strict";
module.exports = (sequelize, DataTypes) => {
  const tipoDentista = sequelize.define(
    "tipoDentista",
    {
      descricao: DataTypes.TEXT
    },
    {}
  );
  tipoDentista.associate = function(models) {
    tipoDentista.hasMany(models.Dentista, {
      foreignKey: "tipoDentista_id"
    });
  };
  return tipoDentista;
};
