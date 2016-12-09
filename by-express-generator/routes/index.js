var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  { title: 'Express',
    task:'task'
  }
  //renderでテンプレートエンジンを指定、受け渡し数値をその中に記載
);
});

module.exports = router;
