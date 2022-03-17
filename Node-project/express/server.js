const express = require("express");

var app = express();


app.get('/', function(request, respond){
    respond.send("This is the home server")
})

app.get('/contact', function(req, res){
    res.send("<h1>This is the contact page</h1>")
})



app.listen(3000, function(){
    console.log("This server is on port 3000")
})