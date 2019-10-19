const express =require('express');
const allCourseRouter = express.Router();
const allCourse = require('../models/allCourses');

//get user details by Email Id

allCourseRouter.get('/', function (req, res, next) {
  console.log("all course");
  allCourse.find(function (err, data) {
    if (err) console.log(err);
    res.json(data);
  });
});

module.exports = allCourseRouter;
