var bcrypt = require('bcrypt');

const saltRounds = 10;

function createHashPass(userPlainPassword) {
  // First, generate salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
    // hash is the encrypted password
    bcrypt.hash(userPlainPassword, salt, function(err, hash) {
        // Store hash in your password DB.
        return hash;
    });
  });
}

function comparePass(userPlainPassword, userHashPassword) {
  bcrypt.compare(userPlainPassword, userHashPassword, function(err, res) {
      return res;
  });
}

module.exports = {
  createHashPass: createHashPass,
  comparePass: comparePass
};
