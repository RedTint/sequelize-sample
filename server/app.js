console.log('You are running sequelize-sample');

var config = require('./config/config');
var connection = require('./database/connection');


// init
connection.init().then(function(response) {
    
    // do something after database was inialized
    // like starting crons and other stuffs.. =D

}, function(error) {
    console.log('Error initializing database connection:');
    console.log(error);
});
