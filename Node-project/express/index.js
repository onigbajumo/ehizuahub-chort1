const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({encoded:true}))



app.get('/', function(request, respond){
    respond.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){

    var number1 = Number(req.body.number1)
    var number2 = Number(req.body.number2);
    var result = number1 + number2;

    console.log(result)
    res.send("The result of your calculation is: " + result)
})

app.get('/contact', function(req, res){
    res.send("<h1>This is the contact page</h1>")
})

app.get('/save', function(req, res){
    res.send("just a test")
})



app.listen(3008, function(){
    console.log("This server is on port 3008")
})