var chai = require('chai');
/*
// Expect from chai promises
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
*/

var expect = chai.expect;
// To be tested
var he = require("../auth/_helpers");

describe("Bcrypt passwords test", function() {

  /*
  it("Generate salt with promise", function() {
    // DEntro de It van expect
    var saltRounds  = 10;

    var salt = he.generateSalt(saltRounds);
    console.log('salt: ', salt)

    expect(salt);
    //expect(hP).to.eventually.be.an('string');
  });
  */

  it("Create hash password", function() {
    // DEntro de It van expect
    var uid = 14356;
    var plainPassword  = '11fernando22';
    var saltRounds  = 10;
    //var retval;
    var hP = he.createHashPassword(uid, plainPassword, saltRounds);
    //expect(hP).to.eventually.be.an('string');
    expect(hP).to.equal('$2a$10$nMhqaHiR6pKjP0CoU/bruup43wAnOTw7Zkn.uQCPHlRTJ7eBgtQWS');
  });

  it("Compare passwords", function() {
    // DEntro de It van expect
    var uid = 14356;
    var plainPassword  = '11fernando22';
    var hashPassword = '$2a$10$nMhqaHiR6pKjP0CoU/bruup43wAnOTw7Zkn.uQCPHlRTJ7eBgtQWS';
    var hP = he.comparePassword(uid, plainPassword,hashPassword);

    expect(hP).to.equal(true);
  });

});
