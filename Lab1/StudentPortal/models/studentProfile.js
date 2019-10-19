var mongoose = require('mongoose');

// defined schema for student profile collection. This collection will store profile of students.
var studentProfileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  studentID: String,
  secondaryEmailAddress: String,
  primaryContactNumber: String,
  secondaryContactNumber: String,
  perStreet: String,
  perCity: String,
  perState: String,
  perPostalCode: String,
  emrName: String,
  emrRelation: String,
  emrAddress: String,
  emrContactNumber: String,
  tempStreet: String,
  tempCity: String,
  tempState: String,
  tempPostalCode: String
});

const studentprofile = mongoose.model('studentprofiles',studentProfileSchema);
module.exports = studentprofile;
