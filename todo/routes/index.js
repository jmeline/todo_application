var express = require('express');
var router = express.Router();

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {title: "Todo Application", body : "This is an example page"});
});

// module.exports = function(app)
// {
//     app.get("/", function(req, res)
//     {
//         res.render("index", {title: "Todo Application", body : "This is an example page"});
//     });
// }
module.exports = router;
