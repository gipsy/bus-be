'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trips', { 
      busName: {
        type: Sequelize.STRING
      },
      carrier: {
        type: Sequelize.STRING
      },
      dateArr: {
        type: Sequelize.DATE
      },
      dateDep: {
        type: Sequelize.DATE
      },
      fullPrice: {
        type: Sequelize.NUMERIC
      },
      routeName: {
        type: Sequelize.STRING
      },
      stArrAddr: {
        type: Sequelize.STRING
      },
      stArrLat: {
        type: Sequelize.NUMERIC
      },
      stArrLong: {
        type: Sequelize.NUMERIC
      },
      stArrName: {
        type: Sequelize.STRING
      },
      stId: {
        type: Sequelize.STRING
      },
      tripId: {
        type: Sequelize.STRING
      },
      wayTimeH: {
        type: Sequelize.NUMERIC
      },
      wayTimeM: {
        type: Sequelize.NUMERIC
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
    return queryInterface.dropTable('trips');
  }
};
