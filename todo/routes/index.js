// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.vash',
//     {title: "Todo App", body: "Todo Application", todo: "None"});
// });

exports.index = function( request, response){
    response.render('index.vash', 
        {title: "Todo App"});
};

exports.add = function( request, response ){
    response.redirect( '/' );
}

// module.exports = router;
