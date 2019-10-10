var mongoose = require('mongoose');

// defined schema for courses collection. This collection will store all the courses.
var courseSchema = new mongoose.Schema({
  className: String,
  days_Times: String,
  instructor: String,
  room: String,
  credit: String
});

const allCourses = mongoose.model('courses',courseSchema);
module.exports = allCourses;
