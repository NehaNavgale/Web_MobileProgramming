const express =require('express');
const studentRouter = express.Router();
const student = require('../models/register');

//get user details by Email Id

studentRouter.post('/',function (req, res, next) {
  let student = new student(req.body);

  student.findOne({emailID : user.emailID}, function (err, data) {

    if( data != null) {
      if (user.password == data.password) {
        var temp = {
          emailID: data.emailID,
          fullName: data.firstName + data.lastName,
          password: data.password
        }

        console.log("password" + temp.password);

        res.json({message: "Success", user: temp});
      } else {
        res.json({message:"Invalid credentials"});
      }
    }
    else{
      res.json({message:'Student does not exists'});
    }
  });
})

module.exports = studentRouter;
