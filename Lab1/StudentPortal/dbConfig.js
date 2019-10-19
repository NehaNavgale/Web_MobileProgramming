var createError = require('http-errors');
var express = require('express');
var http = require('http');
var cors = require('cors');
var path = require('path');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster-x6phc.mongodb.net/StudentPortal?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

var apiLoginRouter = require('./routes/login');
var apiRegisterRouter = require('./routes/register');
var apiAllCourseRouter = require('./routes/allCourses');
var apiRegisteredCourseRouter = require('./routes/registeredCourse');
var apiStudentProfile = require('./routes/studentProfile');
var apiCalendarEvent = require('./routes/calendar');

var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/dashboard', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/courses', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/calendar', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/login', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/register', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/profile', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/videoLessons', express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/login', apiLoginRouter);
app.use('/register', apiRegisterRouter);
app.use('/allCourse' , apiAllCourseRouter);
app.use('/registerCourse', apiRegisteredCourseRouter);
app.use('/studentProfile', apiStudentProfile);
app.use('/calendarEvent', apiCalendarEvent);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
