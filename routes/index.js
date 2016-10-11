var express = require('express');
var router = express.Router();

// Passport
var passport = require('../lauth');

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

router.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
});

router.get('/login',
  function(req, res){
    res.render('login', { message: req.flash('error') });
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  function(req, res) {
    res.redirect('/');
});

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/profile',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
});

router.get('/miform', function(req, res, next) {
  res.render('miform', { username: 'fpacheco' });
});

router.post('/miform', function(req, res, next) {
  console.log('username: ', req.body.username);
  console.log('password: ', req.body.password);
  res.redirect('/');
});

module.exports = router;
