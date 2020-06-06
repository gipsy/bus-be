const Trip = require('src/domain/trip/Trip');

const SequelizeTripMapper = {
  toEntity({ dataValues }) {
    const { 
      busName, 
      carrier,
      dateArr,
      dateDep,
      fullPrice,
      routeName,
      stArrAddr,
      stArrLat,
      stArrLong,
      stArrName,
      stId,
      tripId,
      wayTimeH,
      wayTimeM
    } = dataValues;

    return new Trip({ 
      busName, 
      carrier,
      dateArr,
      dateDep,
      fullPrice,
      routeName,
      stArrAddr,
      stArrLat,
      stArrLong,
      stArrName,
      stId,
      tripId,
      wayTimeH,
      wayTimeM
    });
  },

  toDatabase(survivor) {
    const { busName } = survivor;

    return { busName };
  }
};

module.exports = SequelizeTripMapper;
