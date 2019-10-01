var express = require('express');
var router = express.Router();
var registeredStudent = require('../models/register');

router.post('/', function (req, res, next) {
  registeredStudent.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next){
  registeredStudent.findByIdAndUpdate(req.params.id, req.body, function (err,post){
    if (err) return next(err);
    res.json(post);
  })
})

module.exports = router;
