const Sequelize = require('sequelize');
const db = require('../db');

const CalendarDates = db.define('calendarDates', {
    service_id: { TYPE: Sequelize.STRING },
    date: { TYPE: Sequelize.STRING },
    exception_type: { TYPE: Sequelize.STRING }
});

module.exports = CalendarDates;
