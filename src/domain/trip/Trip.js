const { attributes } = require('structure')

const Trip = attributes({
  busName: String,
  carrier: String,
  dateArr: String,
  dateDep: String,
  fullPrice: Number,
  routeName: String,
  stArrAddr: String,
  stArrLat: Number,
  stArrLong: Number,
  stArrName: String,
  stId: String,
  tripId: String,
  wayTimeH: Number,
  wayTimeM: Number
})(class Trip {
})

module.exports = Trip
