const TripSerializer = {
  serialize({ 
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
  }) {
    return {
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
    }
  }
}

module.exports = TripSerializer
