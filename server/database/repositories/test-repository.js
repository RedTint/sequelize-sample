'use strict';

var connection = require('../connection');
var pool = connection.getPool();
var model = require('../models/test-model')(pool);

function init(force) {

    console.log('> initializing test repository');
    return model.sync({
        force: force
    });

}

function insert() {

}

function getAll() {

}

function getById(id) {

}

module.exports = {

    init    : init,
    insert  : insert,
    getAll  : getAll,
    getById : getById

};
