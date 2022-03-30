const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

var app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");
const uri = "mongodb://localhost:27017/todoListDB";

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
connectWithDB();



const itemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "I will eat launch today"
});

const item2 = new Item({
    name: "Codding by noon today"
});
const item3 = new Item({
    name: "Watch movie by evening"
});

const manyItems = [item1, item2, item3]

Item.insertMany(manyItems, function(err){
    if(err){
        console.log(err)
    }else{
        console.log("New items added succesfully")
    }
})


app.get("/", function(req, res){

    Item.find({}, function(err, foundItems){
        
        res.render("todo", {dayValue:"Today", myNewTodo : foundItems})
    })

})



app.post("/", function(req, res){

    var item = req.body.newTodo;
    
    newItems.push(item);


    res.redirect("/");

})




app.listen(3000, function(){
    console.log("server runniing on port 3000")
})