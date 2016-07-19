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

// repositores
var testRepo = require('./repositories/test-repository');

// initializes the pool
function init() {

    initFirst = true;
    getPool();

    repo.init(pool, false);
    promises.push( testRepo.init( pool, forceSync ) );

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
