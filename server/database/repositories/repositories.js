/**
 * @file 
 * Profiles the list of repositories.
 *
 * 
 */

'use strict';

var repositories = [];
var testRepo = require('./test-repository');

// push all repo to array
repositories.push(testRepo);

// return list
module.exports = repositories;
