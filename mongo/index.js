const mongoose = require("mongoose");
const uri = 'mongodb://localhost:27017/testDB';

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

 const staffSchema = new mongoose.Schema({
     name: String,
     age: Number,
     job: String
 });

 const Staff = mongoose.model("Staff", staffSchema)

 const staff = new Staff ({
     name: "Gbenga",
     age: 21,
     job: "Web developer"
 });


 const adeneka = new Staff({
     name : "Adenkan",
     age: 25,
     job: "Hub manager"
 })

 const ola = new Staff({
     name: "Ola",
     age: 27,
     job: "Upskill manger"
 })

 const wendy = new Staff({
     name : "Wendy",
     age: 31,
     job: "Human resources"
 })

//  Staff.insertMany([adeneka, ola, wendy], function(err){
//      if(err) {
//          console.log(err)
//      } else(console.log("New staff Names saved successfully"))
//  })


 Staff.find(function(err, staffs){
     if(err){
         console.error(err)
     } else{
         staffs.forEach(function(fruit){
             console.log(fruit.name)
         })
     }
 })
//  staff.save();



