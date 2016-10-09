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
  var wId = parseInt(req.params.id);
  db.one('select * from well where id = $1', wId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE well'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}


// curl --data "nombre=Pozo4&x=450004&y=6500004" http://127.0.0.1:3000/api/wells
function createWell(req, res, next) {
  // Parseo los datos
  req.body.nombre = req.body.nombre.toString();
  req.body.x = parseFloat(req.body.x);
  req.body.y = parseFloat(req.body.y);
  // Los inserto
  db.none('insert into well(nombre, x, y)' +
      'values(${nombre}, ${x}, ${y})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one well'
        });
    })
    .catch(function (err) {
      return next(err);
    });
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