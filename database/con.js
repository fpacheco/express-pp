var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://utest:12utest12@localhost:5432/bdh_py';
var db = pgp(connectionString);

module.exports = db;
