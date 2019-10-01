var express = require('express');
var http = require('http');
var apiRegisterRouter = require('./routes/register');
var apiLoginRouter = require('./routes/login');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbUser:dbUser@cluster-x6phc.mongodb.net/StudentPortal?retryWrites=true', { useNewUrlParser: true })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/StudentPortal')));
app.use('/register', apiRegisterRouter);
app.use('/login', apiLoginRouter);


var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')});

module.exports = app;
