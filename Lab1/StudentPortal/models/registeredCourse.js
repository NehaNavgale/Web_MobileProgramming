var mongoose = require('mongoose');

// defined schema for registered courses collection. This collection will store all the courses registered by logged in user.
var registeredCourseSchema = new mongoose.Schema({
  emailAddress:String,
  className: String,
  term: String,
  days_Times: String,
  instructor: String,
  room: String,
  credit: String
});

const registerCourse = mongoose.model('registeredcourses',registeredCourseSchema);
module.exports = registerCourse;
