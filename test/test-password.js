var expect    = require("chai").expect;
var he = require("../auth/_helpers");

describe("Bcrypt passwords test", function() {

  it("Create hash password", function() {
    // DEntro de It van expect
    var plainPassword  = '11fernando22';
    var hashPassword = '$2a$10$9Xk4f9anHWzzEtZsz9hMJOjztaldiUcu14CXcHP1MKzfbUx.mlPfC$2a$10$9Xk4f9anHWzzEtZsz9hMJOjztaldiUcu14CXcHP1MKzfbUx.mlPfC';
    var hP = he.createHashPassword(plainPassword);

    expect(hP).to.equal(hashPassword);
  });

  it("Compare passwords", function() {
    // DEntro de It van expect
    var plainPassword  = '11fernando22';
    var hashPassword = '$2a$10$9Xk4f9anHWzzEtZsz9hMJOjztaldiUcu14CXcHP1MKzfbUx.mlPfC$2a$10$9Xk4f9anHWzzEtZsz9hMJOjztaldiUcu14CXcHP1MKzfbUx.mlPfC';
    var hP = he.comparePassword(plainPassword,hashPassword);

    expect(hP).to.equal(true);
  });

});
