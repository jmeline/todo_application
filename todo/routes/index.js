// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.vash',
//     {title: "Todo App", body: "Todo Application", todo: "None"});
// });

var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');
exports.index = function( request, response){
    Todo.find( function(err, todos, count){
        response.render('index.vash', {title: "Todo App", todo: todos});    
    });
};

exports.add = function( request, response ){
    new Todo({
        content: request.body.content
    }).save(function(err, todo, count ){
        response.redirect( '/' );
    });
};

// module.exports = router;
