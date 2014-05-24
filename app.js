var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// ----work------5.23
// var api = require('./db/api');
// ---end--------
// var mongoose = require('mongoose');

// // 5.23
// var db = mongoose.connect( 
// "mongodb://test1:test1@ds045679.mongolab.com:45679/mydb-mongoose");
// ----------


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// // new add
// // Make our db accessible to our router
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });

app.use('/', routes);
app.use('/users', users);




// mongoose.connect('mongodb://root2:abcd1234@oceanic.mongohq.com:10009/mytest');

//connect to the db server:
// 'mongodb://127.0.0.1:27017/
// mongoose.connect('mongodb://127.0.0.1:27017/MyApp');
// mongoose.connection.on('open', function() {
//     console.log("Connected to Mongoose...");
 
//     // check if the db is empty, if so seed it with some contacts:
//     // seeder.check();
// });

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/** Initialize foodtruck data in database */
//Only run once to fill database. Could occasionally update to
//to stay up to date
//api.loadData();
// ----works----
// app.get('/api/findFoodtrucks', api.findFoodtrucks)
// ----end------

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
});

// // ------start-----------
// // 5.23
// //建立一個 schema
// var Schema = mongoose.Schema;

// // Create a schema for our data
// var MemberSchema = new Schema({
//   username: String,
//   password: String,
//   age: Number
// });

// // 用此 schema 建立一個通道
// // Use the schema to register a model to the db
// mongoose.model('member', MemberSchema);

// // 將此通道和database 連通, 連到一個名叫 members 的 collection (類似SQL中的table),db 中mongodb 會自動加 s 在 collection 名後, 但我們依照用 member
// var MemberModel = mongoose.model('member');

// new MemberModel( {username:'Elvis', password:'11111', age:'20'} ).save();
// new MemberModel( {username:'John', password:'22222', age:'25'} ).save();
// new MemberModel( {username:'Willie', password:'33333', age:'30'} ).save();
// new MemberModel( {username:'Walter', password:'55555', age:'40'} ).save();

// // ------end--------

module.exports = app;
