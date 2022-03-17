const express = require("express");
const bodyParser = require("body-parser")
const https = require("https")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))



app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){
    console.log(req.body)
    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);

    result = number1 + number2
    res.send(`The result of your calculator is: ${result}`)
});

app.get("/about-us", function(req, res){
    res.send("<h1>What do you need to know about me</h1>")
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmi.html")
})

app.post("/bmicalculator", function(req, res){

    console.log(req.body)
    var weight = Number(req.body.weight);
    var height = Number(req.body.height)

    var bmiCalc = weight/Math.pow(height, 2)

    bmiCalc = Math.round(bmiCalc)

    res.send(`The result of your BMI is: ${bmiCalc}`)
})

app.get("/contact", function(req, res){
    res.send("<h1>This is my gmail</h1>")
})

app.listen(3500, function(){
    console.log("server is starting on port 3500")
});

