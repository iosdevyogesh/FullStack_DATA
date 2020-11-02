var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var followersRouter = require('./routes/followers');
var blockedRouter = require('./routes/blocked');
var mediaRouter = require('./routes/media');
var accountRouter = require('./routes/account');
var uploadRouter = require('./routes/upload');



var app = express();

const MONGODB_URI =
  'mongodb://localhost:27017/pixogram?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => console.log('Connected to MongoDB...'))

    .catch(err => console.error('Could not connect to MongoDB...'));

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});    
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/followers', followersRouter);
app.use('/blockers', blockedRouter);
app.use('/media', mediaRouter);
app.use('/account', accountRouter);
app.use('/upload', uploadRouter);


let configureJwtPassport = require('./utility/jwt-passport');
configureJwtPassport(passport => {
  app.use(passport.initialize());
});

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;



