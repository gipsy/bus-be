const TripMapper = require('./SequelizeTripMapper')

class SequelizeTripsRepository {
  constructor({ TripModel }) {
    this.TripModel = TripModel
  }

  async getAll(...args) {
    const trips = await this.TripModel.findAll(...args)
    const test = trips.map(trip => trip.dataValues)
    console.log(test)

    return trips.map(TripMapper.toEntity)
  }

  // Privatejjo
  // async _getById(id) {
  //   try {
  //     return await this.TripModel.findBy(id, { rejectOnEmpty: true })
  //   }
  //   catch(error) {
  //     if(error.name === 'SequelizeEmptyResultError') {
  //       const notFoundError = new Error('NotFoundError');
  //       notFoundError.details = `User with id ${id} can't be found.`;
  //
  //       throw notFoundError;
  //   }
  //
  //   throw error;
  //   }
  // }
}

module.exports = SequelizeTripsRepository
