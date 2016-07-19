'use strict';

// load libraries
var Sequelize = require('Sequelize');

// load config
var config = require('../config/config');
var forceSync = config.sequelize.force;
var mysql = config.mysql;
var sequelize = config.sequelize;

// variable declarations
var initFirst = false;
var pool = null;
var promises = [];


// initializes the pool
function init() {

    initFirst = true;
    promises.push( require('./repositories/test-repository').init( forceSync ) );

    return Promise.all(promises);
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

module.exports = {
    getPool : getPool,
    init    : init
};
