'use strict';

var connection = require('../connection');
var pool = connection.getPool();
var model = require('../models/test-model')(pool);

function init(force) {
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

    insert: insert,
    getAll: getAll,
    getById: getById

};
