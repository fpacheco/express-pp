// http://stackoverflow.com/questions/39566195/node-express-pg-promise-passport-local-jwt-cannot-post
// https://github.com/passport/express-3.x-local-with-flash-example/blob/master/server.js
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
// Database
var db = require('../db').db;
// Passport options
const options = {};

// Find a user (auth_user) by id
function findById(id, cb) {
  db.one('select * from auth_user where id = $1', id)
    // Got one
    .then(function (data) {
      return cb(null, data);
    })
    // Error
    .catch(function (err) {
      return cb(err);
    });
}

// Find a user (auth_user) by name
function findByUsername(username, cb) {
  console.log('|--------');
  console.log( '| findByUsername username: ' + username );
  console.log('|--------');
  db.one('select * from auth_user where username = $1', username)
    // Ok
    .then(function (data) {
      console.log('| findByUsername data: ', data);
      console.log('| findByUsername user.id: ', data.id);
      return cb(null, data);
    })
    // Error
    .catch(function (err) {
      console.log('| findByUsername err: ', err);
      return cb(err);
    });
}

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  options,
  function(username, password, cb) {
    console.log('|--------');
    console.log('| passport username: ', username);
    console.log('| passport password: ', password);
    console.log('|--------');
    findByUsername(username, function(err, user) {
      console.log('| passport err: ', err);
      console.log('| passport user: ', user);
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false, { message: 'Invalid username ' + username });
      }
      if (user.password != password) {
        return cb(null, false, { message: 'Invalid password' });
      }
      return cb(null, user);
    });
}));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

module.exports = passport;
