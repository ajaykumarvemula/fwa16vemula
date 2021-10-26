var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("mydata", { 
      title: 'Ajay Kumar Vemula',
      fact: "I love myself"
     });
});

module.exports = router;
