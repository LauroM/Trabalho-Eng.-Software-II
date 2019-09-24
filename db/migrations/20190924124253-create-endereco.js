'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.TEXT
      },
      bairro: {
        type: Sequelize.TEXT
      },
      cidade: {
        type: Sequelize.TEXT
      },
      uf: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.TEXT
      },
      clinica_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enderecos');
  }
};