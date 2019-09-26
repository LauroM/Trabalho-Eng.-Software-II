"use strict";
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      login: DataTypes.TEXT,
      senha: DataTypes.TEXT
    },
    {}
  );
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Dentista, {
      foreignKey: "usuario_id"
    });

    Usuario.hasMany(models.Paciente, {
      foreignKey: "usuario_id"
    });
  };
  return Usuario;
};
