var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // We are sending the profile inside the token
  var token = jwt.sign(profile, SECRET, { expiresIn: 18000 }); // 60*5 minutes
  res.json({ token: token });
});

module.exports = router;
