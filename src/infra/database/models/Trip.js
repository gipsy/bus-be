'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('trip', {
    busName: DataTypes.STRING,
    carrier: DataTypes.STRING,
    dateArr: DataTypes.DATE,
    dateDep: DataTypes.DATE,
    fullPrice: DataTypes.NUMERIC,
    routeName: DataTypes.STRING,
    stArrAddr: DataTypes.STRING,
    stArrLat: DataTypes.NUMERIC,
    stArrLong: DataTypes.NUMERIC,
    stArrName: DataTypes.STRING,
    stId: DataTypes.STRING,
    tripId: DataTypes.STRING,
    wayTimeH: DataTypes.NUMERIC,
    wayTimeM: DataTypes.NUMERIC
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Trip;
};
