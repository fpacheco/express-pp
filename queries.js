var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://utest:12utest12@localhost:5432/bdh_py';
var db = pgp(connectionString);

function getAllWells(req, res, next) {
  db.any('select * from well')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL wells'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleWell(req, res, next) {
  return next(0);
}

function createWell(req, res, next) {
  return next(0);
}

function updateWell(req, res, next) {
  return next(0);
}

function deleteWell(req, res, next) {
  return next(0);
}

// add query functions
module.exports = {
  getAllWells: getAllWells,
  getSingleWell: getSingleWell,
  createWell: createWell,
  updateWell: updateWell,
  deleteWell: deleteWell
};
