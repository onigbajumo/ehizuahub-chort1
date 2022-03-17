const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");


var app = express()
app.use(bodyParser.urlencoded({enclosed:true}));



app.get("/", function(req, res){


    
    res.sendFile(__dirname + "/weather.html")

})

app.post("/", function(req, res){


    var cityName = req.body.cityName;
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6f523cf23acfe6abbeb9828bfe491bde&units=metric`

    https.get(url, function(response){


        response.on("data", function(data){
            var weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description;


            res.write(`<p>the description says: ${weatherDescription}</p>`);
            res.write(`<h2>the temp in ${cityName} is ${temp} </h2>`);
            res.send()
           
            


        })
    })
})




app.listen(3000, function(req, res){
    console.log("server running on port 3000")
})