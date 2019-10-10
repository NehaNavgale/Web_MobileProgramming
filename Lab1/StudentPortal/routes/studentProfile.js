var express = require('express');
var routerStudent = express.Router();
var studentprofile = require('../models/studentProfile');
// create profile
routerStudent.post('/', function (req, res, next) {
  studentprofile.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
// update profile
routerStudent.put('/updateProfile', function(req, res, next){
  var emailAddress = req.query.emailAddress;
  studentprofile.update({"emailAddress":emailAddress}, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
});
// get profile
routerStudent.get('/getProfile', function (req, res, next) {
  var emailAddress = req.query.emailAddress;
  studentprofile.find({"emailAddress":emailAddress}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = routerStudent;
