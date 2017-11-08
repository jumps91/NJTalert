const Sequelize = require('sequelize');
const db = require('../db');

const Agency = db.define('agency', {
    agency_id: { TYPE: Sequelize.STRING },
    agency_name: { TYPE: Sequelize.STRING },
    agency_url: { TYPE: Sequelize.STRING },
    agency_timezone: { TYPE: Sequelize.STRING },
    agency_lang: { TYPE: Sequelize.STRING },
    agency_phone: { TYPE: Sequelize.STRING }
});

module.exports = Agency;
