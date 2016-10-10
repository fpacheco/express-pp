var express = require('express');
var router = express.Router();
// Force https
var forceSSL = require('express-force-ssl');
// Database
var db = require('../queries');
// Express JWT
var jwt = require('express-jwt');

var config = require('../config'); // get our config file

// Force jwt
router.use( jwt({ secret: config.secret}) );
//router.use(jwt({ secret: 'shhhhhhared-secret'}).unless({path: ['/token']}));

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function(req, res, next) {

    var name = req.body.name;

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }

    }

  });
});

// Se fuerza https
router.get('/wells', forceSSL, db.getAllWells);
// Comunes
router.get('/wells/:id', db.getSingleWell);
router.post('/wells', db.createWell);
router.put('/wells/:id', db.updateWell);
router.delete('/wells/:id', db.deleteWell);

module.exports = router;
