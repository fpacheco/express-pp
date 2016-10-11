var express = require('express');
var session = require('express-session')

//var forceSSL = require('express-force-ssl');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('./lauth');

//var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
//var config = require('./config'); // get our config file

var routes = require('./routes/index');
var users = require('./routes/users');
var otro = require('./routes/otro');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// secret variable
// app.set('superSecret', config.secret); // secret variable


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// use morgan to log requests to the console
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Session
// Si estoy atras de un proxy encriptado
// app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: '%0123InGeSur456789%',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//
app.use(cookieParser());
// CSS, js, etc
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/static', express.static('pubic'));
// Doc
app.use('/doc', express.static('out/express-pp/0.0.0'));
// Flash
app.use(require('connect-flash')());
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', routes);
app.use('/users', users);
app.use('/otro', otro);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
