var express = require('express');
var router = express.Router();
var registeredStudent = require('../models/register');
// create student
router.post('/', function (req, res, next) {
  registeredStudent.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
// update student
router.put('/updateStudent', function(req, res, next){
  var emailAddress = req.query.emailAddress;
  registeredStudent.find({"emailAddress":emailAddress}, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
});
// get registered student
router.get('/getStudent', function (req, res, next) {
  var emailAddress = req.query.emailAddress;
  registeredStudent.find({"emailAddress":emailAddress}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
