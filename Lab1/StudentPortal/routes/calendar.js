var express = require('express');
var routerCalendar = express.Router();
var calendarEvents = require('../models/calendar');
// create calendar event
routerCalendar.post('/', function (req, res, next) {
  calendarEvents.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
// get calendar event
routerCalendar.get('/getEvent', function (req, res, next) {
  var emailAddress = req.query.emailAddress;
  calendarEvents.find({"emailAddress":emailAddress}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = routerCalendar;
