var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  studentID: String,
  password: String,
  confirmPassword: String
});

const registeredStudent = mongoose.model('registeredStudent',studentSchema);
module.exports = registeredStudent;
