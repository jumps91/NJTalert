const Sequelize = require('sequelize');
const db = require('../db');

const Stops = db.define('stops', {
    stop_id: { TYPE: Sequelize.STRING },
    stop_code: { TYPE: Sequelize.STRING },
    stop_name: { TYPE: Sequelize.STRING },
    stop_desc: { TYPE: Sequelize.STRING },
    stop_lat: { TYPE: Sequelize.STRING },
    stop_lon: { TYPE: Sequelize.STRING },
    zone_id: { TYPE: Sequelize.STRING }
});

module.exports = Stops;
