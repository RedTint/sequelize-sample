'use strict';

// load libraries
var Sequelize = require('Sequelize');

// load config
var config = require('./config/config');

// variable declarations
var pool = null;
var initFirst = false;



// initializes the pool
function init() {

    initFirst = true;

}


function getPool() {

    if (!initFirst) {
        throw 'Connection not yet initialized. Please call .init()';
    }

    console.log('> Getting pool')

    if (!pool) {
        pool = createPool();
    }

    return pool;

}

function createPool() {

    console.log('> Creating pool');

    return new Sequelize(
        mysql.database, 
        mysql.username, 
        mysql.password, 
        {
            host: mysql.host,
            dialect: 'mysql',
            pool: sequelize.pool
        }
    );

}
