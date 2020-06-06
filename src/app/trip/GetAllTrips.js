const Operation = require('src/app/Operation');

class GetAllTrips extends Operation {
  constructor({ tripsRepository }) {
    super();
    this.tripsRepository = tripsRepository;
  }

  async execute() {
    const { SUCCESS, ERROR } = this.outputs;

    try {
      const trips = await this.tripsRepository.getAll({
        attributes: [
          'busName',
          'carrier',
          'dateArr',
          'dateDep',
          'fullPrice',
          'routeName',
          'stArrAddr',
          'stArrLat',
          'stArrLong',
          'stArrName',
          'stId',
          'tripId',
          'wayTimeH',
          'wayTimeM'
        ]
      });

      this.emit(SUCCESS, trips);
    } catch(error) {
      this.emit(ERROR, error);
    }
  }
}

GetAllTrips.setOutputs(['SUCCESS', 'ERROR']);

module.exports = GetAllTrips;
