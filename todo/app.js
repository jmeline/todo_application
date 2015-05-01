//
//    My TODO Application
//
var express          = require('express');
var path                = require('path');
var http                = require('http');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var routes            = require('./routes/index');
var users             = require('./routes/users');
var tasks              = require('./routes/tasks');

var mongoskin     = require('mongoskin');
var db = mongoskin.db('mongodb://localhost:27017/todo?auto_reconnect', {safe:true});

var app = express();
app.use(function(req, res, next){
    req.db = {};
    req.db.tasks = db.collection('tasks');
    next();
})

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vash');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set routes
app.use('/', routes);
app.get('/tasks', tasks.list);
app.post('/tasks', tasks.markAllCompleted)
app.post('/tasks', tasks.add);

app.use('/users', users);

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port)'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
