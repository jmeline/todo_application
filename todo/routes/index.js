var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.vash',
    {title: "Todo App", body: "TODO Application"});
});

module.exports = router;
