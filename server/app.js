console.log('You are running sequelize-sample');

var config = require('./config/config');
var connection = require('./database/connection');


// init
connection.init().then(function(response) {
    
    // do something after database was inialized
    // like starting crons and other stuffs.. =D
    console.log('> Done initializing mysql connection')
    
    // executing sample insertation of data
    var testRepo = require('./database/repositories/test-repository');
    
    testRepo.insert({
        description: 'Test Description'
    }).then(function(result) {

        console.log('> Showing sequelize insert response');
        console.log(result);

    }, function(error){ 

        console.log('> An error occured while inserting data:');
        console.log(error);
        
    });

}, function(error) {
    console.log('Error initializing database connection:');
    console.log(error);
});
