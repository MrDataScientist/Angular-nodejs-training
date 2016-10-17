/*
#
# @autor : Tarik En Nakdi
# Training
*/

var express = require('express');

var app = express();
var router = express.Router();

var prepareHello = function(req, res, next){
  req.hello = "Hello!!";
  next(); // indicate when it s time to move on to the next function
}

var sendHello = function(req, res){
  res.send(req.hello);
}


router.route('/').get(prepareHello, sendHello);

app.use(router);

app.listen(3000,'127.0.0.1',function(){
console.log("Listening");
});
