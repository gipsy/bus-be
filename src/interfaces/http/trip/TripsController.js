const { Router } = require('express')
const { inject } = require('awilix-express')
const Status = require('http-status')

const TripsController = {
  get router() {
    const router = Router()

    router.use(inject('tripSerializer'))

    router.get('/', inject('getAllTrips'), this.index)

    return router
  },

  index(req, res, next) {
    const { getAllTrips, tripSerializer } = req
    const { SUCCESS, ERROR } = getAllTrips.outputs

    getAllTrips
      .on(SUCCESS, (trips) => {
        res
          .status(Status.OK)
          .json(trips.map(tripSerializer.serialize))
      })
      .on(ERROR, next)

    getAllTrips.execute()
  }
}

module.exports = TripsController
