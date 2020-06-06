'use strict';

const dataFaker = require('src/infra/support/dataFaker');
const busNames = [
  '2X Minibus',
  '3Tr Single deck',
  '4X Single deck',
  '6Tr Single deck',
  '7Tr Single deck',
  '8Tr Single deck',
  '9Tr Single deck',
  '12M Single deck',
  '14Tr Single deck',
  '152 Single deck'
]

const carriers = [
  'Power Vehicle Innovation',
  'Škoda Transportation',
  'Minsk Automobile Plant'
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    const testTrips = [];

    for(let i = 0; i < 2; i++) {
      testTrips.push({
        busName: busNames[i],
        carrier: carriers[i],
        dateArr: dataFaker.date(),
        dateDep: dataFaker.date(),
        fullPrice: dataFaker.prime(),
        routeName: dataFaker.word(),
        stArrAddr: dataFaker.address(),
        stArrLat: dataFaker.latitude(),
        stArrLong: dataFaker.longitude(),
        stArrName: dataFaker.word(),
        stId: dataFaker.guid(),
        tripId: dataFaker.guid(),
        wayTimeH: dataFaker.hour(),
        wayTimeM: dataFaker.minute(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('trips', 
      testTrips
    , {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trips', null, {});
  }
};
