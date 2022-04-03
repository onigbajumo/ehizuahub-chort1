const uri = 'mongodb://localhost:27017/EhizuahubDB';
const express = require("express");
const bodyParser = require("body-parser")
const https = require("https")
const mongoose = require("mongoose")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

 const options = {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 family:4
 }

 function connectWithDB() {
 mongoose.connect(uri, options, function(err, db) {
  if (err) console.error(err);
  else console.log("database connected")
})
}

 connectWithDB()


 const studentSchema = new mongoose.Schema({
    name: String,
    program: String
})

const Student = mongoose.model("Student", studentSchema);


app.get("/student", function(req, res){
    Student.find(function(err, foundStudents){
        res.send(foundStudents)
    })

})


 app.listen(3000, function(){
    console.log("server is starting on port 3000")
});
