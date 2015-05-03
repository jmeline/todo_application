var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.index = function( request, response){
    Todo.find(function(error, todos){
        response.render('index.vash', {title: "Todo App", todo: todos});    
    });
};

exports.add = function( request, response, next ){
    if (request.body.content){
        var new_object = new Todo({
            content: request.body.content
        })

        new_object.save(function(error, todo){
            if (error) return next(error);

            console.info("Added Todo: '" + todo.content + "'");
            response.redirect( '/' );
        });
    }
    else{
        console.log("Error: Unable to add an empty todo");
        response.redirect( '/' );
    }
};

exports.rm = function( request, response ){
    Todo.findById( request.params.id, function (error, todo){
        todo.remove( function (error, todo){
            console.log("Removed: '" + todo.content + "'");
            response.redirect( '/' );
        });
    });
};

exports.edit = function( request, response ){
    Todo.find( request.params.id, function(error, todos){
        response.render('edit_todo.vash', {title: "Todo App : Edit",
        todo: todos, edited_id: request.params.id})
    });  
};

exports.update = function( request, response ){

    Todo.findById( request.params.id, function( error, todo){
        if (request.body.content){
            prev_content = todo.content;
            todo.content = request.body.content;
            todo.save(function(error, todo){
                console.log("Updated: '" + prev_content + "' to '" + todo.content + "'");
                response.redirect('/');
            });
        } 
        else{
            console.log("Error: Unable to change '" + todo.content + "' to null");
            response.redirect('/');    
        }
    });
};

