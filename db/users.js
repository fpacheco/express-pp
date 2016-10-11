var db = require('./con');

function findById(req, res, next) {
  var id = parseInt(req.params.id);
  db.one('select * from auth_user where id = $1', id)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function findByUsername(req, res, next) {
  var name = req.name.toString();
  db.one('select * from auth_user where username = $1', name)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

// add query functions
module.exports = {
  findById: findById,
  findByUsername: findByUsername,
};
