var express = require('express');
var registeredCourseRouter = express.Router();
var registeredCourse = require('../models/registeredCourse');

/* GET ALL Courses */
registeredCourseRouter.get('/getCourse', function (req, res, next) {
  var emailAddress = req.query.emailAddress;
  registeredCourse.find({"emailAddress":emailAddress}, function (err, courses) {
    if (err) return next(err);
    res.json(courses);
  });
});


/* SAVE Course */
registeredCourseRouter.post('/', function (req, res, next) {
  registeredCourse.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = registeredCourseRouter;
