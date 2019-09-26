"use strict";
module.exports = (sequelize, DataTypes) => {
  const Dentista = sequelize.define(
    "Dentista",
    {
      nome: DataTypes.TEXT,
      registro_cro: DataTypes.INTEGER,
      cpf: DataTypes.STRING,
      rg: DataTypes.STRING,
      usuario_id: DataTypes.INTEGER,
      tipoDentista_id: DataTypes.INTEGER,
      faturamento_id: DataTypes.INTEGER
    },
    {}
  );
  Dentista.associate = function(models) {
    Dentista.belongsTo(models.tipoDentista, {
      foreignKey: "tipoDentista_id"
    });

    Dentista.belongsToMany(models.Clinica, {
      foreignKey: "dentista_id",
      through: "Participacao"
    });

    Dentista.belongsTo(models.Faturamento, {
      foreignKey: "faturamento_id"
    });

    Dentista.hasMany(models.Consulta, {
      foreignKey: "dentista_id"
    });

    Dentista.belongsTo(models.Usuario, {
      foreignKey: "usuario_id"
    });
  };
  return Dentista;
};
