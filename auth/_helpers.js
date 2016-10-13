var bcrypt = require('bcrypt');
const saltRounds = 10;

function createHashPass(userPlainPassword) {
  // First, generate salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
    // hash is the encrypted password
    bcrypt.hash(userPlainPassword, salt, function(err, hash, cb) {
        console.log('hash: ', hash);
        return cb(err, hash);
    });
  });
}

function comparePass(userPlainPassword, userHashPassword, cb) {
  bcrypt.compare(userPlainPassword, userHashPassword, function(err, res) {
    console.log('res: ',res);
    return cb(err,res);
  });
}

module.exports = {
  createHashPass,
  comparePass
}
