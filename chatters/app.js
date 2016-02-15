var express = require('express');
// todo - remove this when the jade/html stuff is removed
var path = require('path');
// todo - remove this prior to cleanup/release
//var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSessionCfg = require('./config/expressSessionCfg');
var expressSession = require('express-session')(expressSessionCfg);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var socketIo = require('socket.io')();
var rooms = require('./sockets/rooms');

var mongoose = require('mongoose');
var mongooseCfg = require('./config/mongooseCfg');
mongoose.connect(mongooseCfg.uri, mongooseCfg.options);

// todo - remove this - we're going REST-only! Leaving it here for testing purposes for now...
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// todo - don't need this anymore - remove it when initial REST API is set up
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var User = require ('./model/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.io = socketIo;
rooms(app);

module.exports = app;
