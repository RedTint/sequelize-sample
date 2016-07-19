'use strict';

var Sequelize = require('sequelize');

/**
 *  accepts an instance of the pool as sequelize
 */
module.exports = function(sequelize) {

    var tableName = 'tests';
    var model = {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: Sequelize.TEXT
        }
    };

    var config = {
        freezeTableName: true,
        timestamps: false
    };

    return sequelize.define(tableName, model, config);

};
