var express = require("express");

var router = express.Router();

var rno;

var acosh;

var log1p;

var tan;
var sqrt;



/* GET users listing. */



router.get("/", function (req, res, next) {

  rno = Math.random() * (100 - 1) + 1;

  rno1 = Math.random() * (100 - 1) + 1;



  acosh = Math.acosh(rno, rno1);



  log1p = Math.log1p(rno);



  tan = Math.tan(rno);
  sqrt = Math.sqrt(rno);



  res.send(`acosh applied to ${rno} is ${acosh} <br>



            log1p applied to 0.5 is ${log1p} <br>



            tan applied to ${rno} is ${tan} <br>
            sqrt applied to ${rno} is ${sqrt}`);

});



module.exports = router;