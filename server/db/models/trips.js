const Sequelize = require('sequelize');
const db = require('../db');

const Trips = db.define('trips', {
    route_id: { TYPE: Sequelize.STRING },
    service_id: { TYPE: Sequelize.STRING },
    trip_id: { TYPE: Sequelize.STRING },
    trip_headsign: { TYPE: Sequelize.STRING },
    direction_id: { TYPE: Sequelize.STRING },
    block_id: { TYPE: Sequelize.STRING },
    shape_id: { TYPE: Sequelize.STRING }
});

module.exports = Trips;
