// Para encriptar - bcryptjs esta en todos lados, no tiene dependencias y es
// compatible con bcrypt
var bcrypt = require('bcryptjs');
// Para emitir eventos que desea agregar
const EventEmitter = require('events');
class PasswordEmitter extends EventEmitter {}
const passwordEmitter = new PasswordEmitter();

passwordEmitter.on('passwordHashed', function (uid, err, hash) {
  console.log('A passwordHashed event occurred!');
  console.log('uid: ', uid);
  console.log('hash: ', hash);
});

passwordEmitter.on('passwordCompared', function (uid, err, res) {
  console.log('A passwordCompared event occurred!');
  console.log('uid: ', uid);
  console.log('result: ', res);
});

//var Promise = require('promise');

// const saltRounds = 10;

/*
function generateSaltP(saltRounds) {
  saltRounds = saltRounds || 10;
  return new Promise(function (resolve, reject) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) {
        reject(err);
      } else {
        resolve(salt);
      }
    })
  })
}

function generateSalt(saltRounds) {
  generateSaltP(saltRounds).then(function (data) {
      return data;
    }).catch(function (err) {
      return err;
    });
}


function createHashPasswordP(userPlainPassword, salt) {
  salt = salt || 10;
  return new Promise(function (resolve, reject) {
    bcrypt.hash(userPlainPassword, salt, function (err, hash) {
      if (err) {
        return reject(err);
      }
      return resolve(hash);
    })
  })
}
*/

function createHashPassword(uid, userPlainPassword, saltRounds) {
  saltRounds = saltRounds || 10;
  // First, generate salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
    // hash is the encrypted password
    bcrypt.hash(userPlainPassword, salt, function(err, hash) {
      /*
      console.log('userPlainPassword: ', userPlainPassword);
      console.log('salt: ', salt);
      console.log('err: ', err);
      console.log('hash: ' + hash);
      */
      passwordEmitter.emit('passwordHashed', uid, err, hash);
      //retval = hash;
    });
  });
}

function comparePassword(uid, userPlainPassword, userHashPassword) {
  bcrypt.compare(userPlainPassword, userHashPassword, function(err, res) {
    /*
    console.log('err: ', err);
    console.log('res: ', res);
    */
    passwordEmitter.emit('passwordCompared', uid, err, res);
  });
}

module.exports = {
  createHashPassword,
  comparePassword
  /*
  generateSaltP,
  generateSalt,
  createHashPasswordP
  */
}
