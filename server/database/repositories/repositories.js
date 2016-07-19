/**
 * @file 
 * Profiles the list of repositories.
 *
 * 
 */

'use strict';

var repositories = [];
var testRepo = require('./test-repository');
var userRepo = require('./user-repository');

// push all repo to array
repositories.push(testRepo);
repositories.push(userRepo);

// return list
module.exports = repositories;
