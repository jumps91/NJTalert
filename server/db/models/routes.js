const Sequelize = require('sequelize');
const db = require('../db');

const Routes = db.define('routes', {
    route_id: { TYPE: Sequelize.STRING },
    agency_id: { TYPE: Sequelize.STRING },
    route_short_name: { TYPE: Sequelize.STRING },
    route_long_name: { TYPE: Sequelize.STRING },
    route_type: { TYPE: Sequelize.STRING },
    route_url: { TYPE: Sequelize.STRING },
    route_color: { TYPE: Sequelize.STRING }
});

module.exports = Routes;
