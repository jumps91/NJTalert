var csvjson = require('csvjson');
var fs = require('fs');
var path = require('path');

var calendar_dates_CSV = fs.readFileSync(path.join(__dirname, 'calendar_dates.csv'), { encoding: 'utf8' });
var agency_CSV = fs.readFileSync(path.join(__dirname, 'agency.csv'), { encoding: 'utf8' });
var routes_CSV = fs.readFileSync(path.join(__dirname, 'routes.csv'), { encoding: 'utf8' });
var stop_times_CSV = fs.readFileSync(path.join(__dirname, 'stop_times.csv'), { encoding: 'utf8' });
var stops_CSV = fs.readFileSync(path.join(__dirname, 'stops.csv'), { encoding: 'utf8' });
var trips_CSV = fs.readFileSync(path.join(__dirname, 'trips.csv'), { encoding: 'utf8' });


/*
{
    delimiter : <String> optional default is ","
    quote     : <String|Boolean> default is null
}
*/
var options = {
    delimiter: ',', // optional 
    quote: '"' // optional 
};
// for multiple delimiter you can use regex pattern like this /[,|;]+/ 

/* 
  for importing headers from different source you can use headers property in options 
  var options = {
    headers : "sr,name,age,gender"
  };
*/

var calendarJSON = csvjson.toObject(calendar_dates_CSV, options);
var agencyJSON = csvjson.toObject(agency_CSV, options);
var routesJSON = csvjson.toObject(routes_CSV, options);
var stopTimesJSON = csvjson.toObject(stop_times_CSV, options);
var stopsJSON = csvjson.toObject(stops_CSV, options);
var tripsJSON = csvjson.toObject(trips_CSV, options);

fs.writeFileSync('calendar_dates.json', JSON.stringify(calendarJSON));
fs.writeFileSync('agency.json', JSON.stringify(agencyJSON));
fs.writeFileSync('routes.json', JSON.stringify(routesJSON));
fs.writeFileSync('stop_times.json', JSON.stringify(stopTimesJSON));
fs.writeFileSync('stops.json', JSON.stringify(stopsJSON));
fs.writeFileSync('trips.json', JSON.stringify(tripsJSON));


/*
    returns
 
    [
        {
            sr : 1,
            name : "rocky",
            age : 33,
            gender : "male"
        },
        {
            sr : 2,
            name : "jacky",
            age : 22,
            gender : "male"
        },
        {
            sr : 3,
            name : "suzy",
            age : 21,
            gender : "female"
        }
 
    ]
 
*/
