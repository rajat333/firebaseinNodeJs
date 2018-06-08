var express = require('express');
var app = express();
var router = express.Router();


app.use(express.static('public'))
app.get('/',function(req,res){

    res.render('index');
});

router.get('/accounts/facebook/login/callback/',function(req,res){

    console.log("....Welcome to fb callback...");
});
console.log("Listening on port 8080");

app.listen(8080);