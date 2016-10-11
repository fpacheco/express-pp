var db = require('./con');

function findById(id) {
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

function findByUsername(username) {
  console.log('|--------');
  console.log( '| findByUsername username: ' + username );
  console.log('|--------');
  db.one('select * from auth_user where username = $1', username)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      console.log('| findByUsername err: ' + err);
      return next(err);
    });
}

// add query functions
module.exports = {
  findById: findById,
  findByUsername: findByUsername,
};
