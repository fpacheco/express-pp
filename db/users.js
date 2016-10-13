var db = require('./index').db;


// add query functions
module.exports = {
  findById: findById,
  findByUsername: findByUsername,
};
