'use strict';

var connection = require('../connection');
var modelDef = require('../models/test-model');
var model = null;
var pool = null;

function init(_pool, force) {

    pool = _pool;
    model = modelDef(pool);

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
