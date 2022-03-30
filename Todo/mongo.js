const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


var app = express();


app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");

const uri = "mongodb://localhost:27017/todoDB";

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


const itemsSchema = new mongoose.Schema({
    newItem: String
})

const Item = mongoose.model("Item", itemsSchema)


const  item1 = new Item({
    newItem: "What am i doing today"
});

const item2 = new Item({
    newItem : "item2 adeed"
});

const item3 = new Item({
    newItem : "Item added and waiting for test"
});
const defaultItems = [item1, item2, item3]




app.get("/", function(req, res){

   
    Item.find({}, function(err, foundItems){
        if(foundItems.length === 0){
            Item.insertMany(defaultItems, function(err){
                if(err){
                    console.log(err)
                } else{
                    console.log("new Items added successfully")
                }
            });
            res.redirect("/");
        }else{
            res.render("todo", {dayValue:"Today", myNewTodo : foundItems})
        }
        
    })

    
    
})

app.post("/", function(req, res){

    var itemName = req.body.newTodo;
    
    const  item = new Item({
        newItem: itemName
    });

    item.save();


    res.redirect("/");

})









app.listen(3000, function(){
    console.log("server runniing on port 3000")
})

