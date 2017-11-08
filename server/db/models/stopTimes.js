const Sequelize = require('sequelize');
const db = require('../db');

const StopTimes = db.define('stopTimes', {
    trip_id: { TYPE: Sequelize.STRING },
    arrival_time: { TYPE: Sequelize.STRING },
    departure_time: { TYPE: Sequelize.STRING },
    stop_id: { TYPE: Sequelize.STRING },
    stop_sequence: { TYPE: Sequelize.STRING },
    pickup_type: { TYPE: Sequelize.STRING },
    drop_off_type: { TYPE: Sequelize.STRING },
    shape_dist_traveled: { TYPE: Sequelize.STRING }
});

module.exports = StopTimes;
