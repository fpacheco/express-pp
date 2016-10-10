var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sess = req.session;
  sess.root = 'Vió el root';
  res.render('index', { title: 'Express' });
});

router.get('/root', function(req, res, next) {
  res.send('root:' + req.session.root);
});

router.get('/cook', function(req, res, next) {
  console.log('Cookies: ', req.cookies)
  res.send('cookies:' + req.cookies);
});

module.exports = router;
