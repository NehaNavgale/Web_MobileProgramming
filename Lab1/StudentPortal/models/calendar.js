var mongoose = require('mongoose');

// defined schema for calendar collection. This collection will store events added by loggedin User.
var calendarSchema = new mongoose.Schema({
  emailAddress: String,
  title: String,
  start: String,
  end: String
});

const calendar = mongoose.model('calendarEvents',calendarSchema);
module.exports = calendar;
