var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');
exports.index = function( request, response){
    Todo.find( function(error, todos){
        response.render('index.vash', {title: "Todo App", todo: todos});    
    });
};

exports.add = function( request, response ){
    new Todo({
        content: request.body.content
    }).save(function(error, todo){
        response.redirect( '/' );
    });
};

exports.rm = function( request, response){
    Todo.findById( request.params.id, function (error, todo){
        todo.remove( function (error, todo){
            response.redirect( '/' );
        });
    });
};