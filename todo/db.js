var mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/todo' );

 
// var Schema   = mongoose.Schema;
// var Todo = new Schema({
//     user_id    : String,
//     content    : String,
//     updated_at : Date
// });
 
mongoose.model( 'Todo', { content : String } );
