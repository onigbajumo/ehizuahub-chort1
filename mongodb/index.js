const mongoose = require("mongoose");
const uri = 'mongodb://localhost:27017/EhizuaDB';

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
    job: {
        type: String,
        required: [true, "please insert job"]
    },
    age: {
        type: Number,
        required: true,
        min: [18,  "You are not eligible for this post"],
        max: [27, "You are too old for this post"]
    }

})

const myStaff = mongoose.model("Staff", staffSchema);

const staffOne = new myStaff({
    name: "Gbenga",
    job: "Web Developer",
    age: 23

})

staffOne.save() 

const staffTwo = new myStaff({
    name: "Adenekan",
    job: "Hub Manager",
    age: 24

});
const staffThree = new myStaff({
    name: "Ola",
    job: "Upskill Manager",
    age: 24

});
const staffFour = new myStaff({
    name: "Wendy",
    job: "Human Resources",
    age: 27

});

myStaff.insertMany([staffTwo, staffThree, staffFour], function(err){
    if(err){
        console.log(err)
    } else{
        console.log("New staff successfully saved")
    }
})

// myStaff.updateOne({_id:"6244346407f35c0c6339759a"}, {name: "Adenekan"}, function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log("New name successfully updated")
//     }
// })

// myStaff.deleteOne({name:"Adenekan"}, function(err){
//     if(err){
//         console.log(err)
//     }else(console.log("new staff deleted successfully"))
// })




// myStaff.find(function(err, staff){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(staff.forEach(function(staff){
//             console.log("Name: "+ staff.name + " and Job: "+ staff.job + " my age is "+ staff.age)
            
//         }))
//     }
// })







 
