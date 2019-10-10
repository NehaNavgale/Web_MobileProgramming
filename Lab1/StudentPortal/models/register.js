var mongoose = require('mongoose');

// defined schema for register collection. This collection will store all the registed students and their login details.
var studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  studentID: String,
  password: String,
  confirmPassword: String
});

const registeredStudent = mongoose.model('registeredstudents',studentSchema);
module.exports = registeredStudent;
