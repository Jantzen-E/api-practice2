var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const DAL = require('./dataAccessLayer');
const ObjectId = require('mongodb').ObjectId;
// const app = express();
const port = 5000;
// process.env.PORT; 
// const cors = require('cors');
// add our data access layer file
// app.use(bodyParser.json());
// app.use(cors());
DAL.Connect();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require('dotenv').config();
var cors = require('cors');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api', usersRouter);

app.get('/api/waterFilters', cors(), async function(req, res) {
  // const result = Object.values(products);
  const result = await DAL.Find();

  res.send(result);
});

app.get('/api/waterFilters/:id', cors(), async function(req, res) {
  const id = req.params.id;
  
  const product = {
      _id: ObjectId(id)
  };

  const result = await DAL.Find(product);

  if (result) {
      res.send(result);
  }
  else {
      res.send('No product with ID: ' + id + ' found!');
  }
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
