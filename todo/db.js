var mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/todo' );
mongoose.model( 'Todo', { content : String } );
