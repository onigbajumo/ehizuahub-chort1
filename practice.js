//let name = prompt("input your name")



//JavaScript Variable
//var
//let
//const


/*var car;
car = "Venza"
console.log(car)
var firstName = "Onigbajumo"
var lastName = "Gbenga"

console.log("My full name is " + firstName + " " + lastName );

var lastName = "Daniel"
var firstName = "Gbenga"

console.log("My full name is " + firstName + " " + lastName );


let myName = "Gbenga Daniel"
console.log("What is your name: " + "My \"names\" is " + myName);

let name = "Yetunde oladapo"
console.log("What is your name: " + "My \"names\" is " + myName);

let cars;
cars = "Camry"
console.log(cars);

const a = 21
const b = 30

console.log("in " + a + " days from now i will be " + b + " yerars old");

const c = 30
const d = 21

console.log("in " + c + " days from now i will be " + d + " yerars old");*/





/*Data Type in JavaScript 
    String: anything inside th quotes
    Number: any numeric data
    Boolean: True/False
    Symbol:
    object:


*/

/*let sample = "Gbenga "
console.log(sample);
console.log(typeof sample);

sample = 25
console.log(sample);
console.log(typeof sample);

sample = -200
console.log(sample);
console.log(typeof sample);

sample = 0.009
console.log(sample);
console.log(typeof sample);

sample = true
console.log(sample);
console.log(typeof sample);

sample = false
console.log(sample);
console.log(typeof sample);

sample = Symbol(4)
console.log(sample);
console.log(typeof sample);

sample = null
console.log(sample);
console.log(typeof sample);

sample = ["Gbenga", "Emmanuerl", "Tobi", "Yetunde"]
console.log(sample);
console.log(typeof sample);

let person = {
    name: "gbenga",
    age: 21,
    proffesion: "web Developer",
}
console.log(person);
console.log(typeof person);*/



//My name is *Gbenga* and i am learning *Fullstack development* at *ehizuahub*

let learning = "Iam learning @JavaScript and it is Great!"

var courses = "Fullstack Development"
let school = "Ehizuahub "
let myName = "Gbenga@gmail.com"


// let output = ("My Name is " + myName + " and i am learning " + courses + " at " + school )
//Strings Methods

//Length

output = learning.length

//Concatination
output = learning.concat(" ", "and it is fun" )

//To Uppercase

finalOutput = output.toUpperCase()

output = learning.toUpperCase()

//To lowerscase

output = learning.toLowerCase()

//Indexing

output = learning.indexOf("@")

//Substring

output = learning.substring(15, 25)
output = learning.substring(learning.length -6)


//Slice

output = learning.slice(1, 13)
// output = learning.slice(-20)

// console.log(output);


// let insertName = prompt("Insert your name")
//  insertName = insertName.toUpperCase()
// insertName = insertName.toLowerCase()

/*firstLetter = insertName.slice(0, 1)
firstLetter = firstLetter.toUpperCase()
insertName = insertName.slice(1, insertName.length)

finalName = firstLetter + insertName
*/
// console.log(finalName)




// console.log(insertName)
// console.log(firstLetter)


//Numbers

const   a = 50.345321,
        b = 2,
        c = -3;

    let result;

    //addition

    result = a + b

    //Subtraction

    result = a - b
    
    //Multiplication 

    result = a * b

    //division 

    result = a / c

    //Modulo

    result = a % b

    //Numbers Method 

    //PI
    result = Math.PI

    //Round Up

    result = Math.round(a)

    //Round up

    result = Math.ceil(3.5)

    //Round down

    result = Math.floor(6.9)

    //Squre roots

    result = Math.sqrt(100)

    //Power 

    result = Math.pow(10, 2)

    //increament 



    console.log(result)



    //Function
    function myRoutine(){

        alert("Wake up");
        alert("Take your bath");
        alert("come to Ehizuahub");
        alert("instruct");
        alert("Go back home");
        alert("find something to eat");
        alert("gist");
        alert("rest and resume night work");
        alert("Sleep");
    }

  

    // myRoutine();


    function sendMessage(cash){

        var costOfBottleWater = 20;
        var numbersOfBottleWater = cash / costOfBottleWater;
        var change = cash % costOfBottleWater;


        console.log("Bounce out of the gate");
        console.log("Buy " + Math.floor(numbersOfBottleWater) + " bottle water");
        console.log("Bounce back inside the gate");
        console.log("Give me my bottle water and my change");

        return

        console.log("Your bottle water is " + Math.floor(numbersOfBottleWater) + " bottles" + " and your change is " + "N" + change)

    }


    // sendMessage(82);




   


//     function yearsLeft(age){

//         var newAge = 90 - age

//         var daysLeft = 365* newAge
//         var weeksLeft = newAge * 52
//         var monthLeft = newAge * 12
//         return ("You have " + daysLeft + " days, " + weeksLeft + " weeks," + " and " + monthLeft + " months left.");
//     }


// var newResult = yearsLeft(89)

// console.log(newResult)


//BMI = weight(kg) / height?2(m?2)


/*var bmi = bmiCalc(65, 1.8)
20*/


function bmiCalc(weight, height){

    var bmi = weight/Math.pow(height, 2)
    return "The result of your BMI is " + Math.round(bmi)

}

var bmi = bmiCalc(65, 1.8)

console.log(bmi)


//To generate randome Numbers


//0 - 0.99


var randomNumber = Math.random()
randomNumber = Math.floor(randomNumber * 100) + 1
console.log(randomNumber)



// prompt("What is your name ");
// prompt("what is his/her name");

// var lovescore = Math.random() * 100
// lovescore = Math.floor(lovescore) + 1
// alert("Your LoveScore is " + lovescore + "%")




// var guestList = ["Angela", "Jack", "James", "Lara", "Jason" ]
// var guestName = prompt("Insert guest name to check")

// if (guestList.includes(guestName)){
//     alert("Welcome")
    
// }else {
//     alert("Please insert correct name")
// }


// var output = []

function fizzBuzz(){
    var output = [];
    for (var i = 1; i<=100; i++){

        if (i % 3 === 0 && i % 5 === 0) {
           output.push("FizzBuzz")
        } else if (i %3 === 0){
            output.push("Fizz")
        } else if (i % 5 === 0){
            output.push("Buzz")
        }
        else {
            output.push(i)
        } 
        console.log(output);
        
    }
}

// fizzBuzz()



// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }





// function fibonacciGenerator(n){
//     for (i = 0; i <= n; i++){

//     }
// }

// function getClients(){
//     console.log("Downloading...");

//     setTimeout(function(){
//         console.log("Completed")
//     }, 5000);
// }


// getClients()


// if (confirm("You are about to delete this")){
//     console.log("deleted")
// } else {
//     console.log("Try again")
// }

// let height, width;

// height = window.outerHeight;
// width = window.outerWidth

// console.log(height);
// console.log(width)


// document.querySelectorAll("h1")[2].innerText = "Learning Front end";

// document.querySelector("button").classList.add("new-btn")



function newMessage(cash){
    var bottleWaterCost = 15;
    var bottleWaterNumber = cash/bottleWaterCost;
    var changes = cash % bottleWaterCost;

    return ("Your bottle water is " + Math.floor(bottleWaterNumber) + " and you have a change of " + "N" + Math.floor(changes));
    

}

// console.log(newMessage(29.999))
 /* 
    
    In this challenge you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years

    assume we have 365 days in a year, 52 weeks in a year and 12 months in a year



    Your output should be 

    You have x days, y weeks, and z months left.

    */


    // function myAge(age){
    //     var newAge = 90 - age;
    //     var daysLeft = newAge * 365;
    //     var weeksLeft = newAge * 52;
    //     var monthLeft = newAge * 12;

    //     return ("You have " + daysLeft + " days, " + weeksLeft + " weeks, " + "and " + monthLeft + " months left");

    // }

    // console.log(myAge(24))


    // prompt("what is your name");
    // prompt("what is her/his name")
    // function loveScore(){
    //     var loveCalculator = Math.floor(Math.random() * 100) + 1;
    //     return alert("Your Score is " + loveCalculator + "%")
    // }
   

    // loveScore()



    // var eventButton = document.querySelector(".btn");


    // eventButton.addEventListener("mouseleave", printEvent);

    // function printEvent(e){
    //     console.log(`The Event is: ${e.type}`)
    //     // console.log(e.target.className)
    // }



// document.querySelector(".btn").addEventListener("mouseout", (doEvent));

// console.log(print);


// function doEvent(){
//     print = document.getElementById("print").innerHTML = "This is what you want";
//     console.log(print)
    
// }


// document.addEventListener("mousemove", function(){
//     document.getElementById("print").innerHTML = Math.random();
// });



// document.addEventListener("mousemove", myHeader);

// function myHeader(){
//     document.getElementById("print").innerHTML = Math.random();
// }



// function removeEvent(){
//     document.removeEventListener("mousemove", )
// }


// var myButton = document.querySelector(".btn")
// var buttonEVent = myButton.addEventListener("mouseover", newEvent)


function newEvent(e){
    let element = e;
    // element =  e.target
    // element = e.type


    // console.log(element)
}
console.log("hello world")





// Callback Functions



const countries = ["Nigeria", "America", "Australia", "Canada", "Finland", "France"]


// countries.forEach(function(country){
//     console.log(country)
// })


function addCountry(country, callback){
    setTimeout(function(){
        countries.push(country);

        callback()
    },3000)
}

function displayCountries(){
    setTimeout(function(){
        let html = ""
        countries.forEach(function(country){
            html += `<li>${country}</li>`

        }); document.body.innerHTML = html
    }, 1000)
}


displayCountries()
addCountry("Algeria", displayCountries)



























// function addCountry(country, callback){
//     setTimeout(function(){
//         countries.push(country);
//         callback()
//     }, 4000);
// }

// function displayCountries(){
//     setTimeout(function(){
//         let html = ""
//         countries.forEach(function(country){
//             html += `<li>${country}</li>`
//         }); document.querySelector(".html").innerHTML = html
//     }, 1000);
// }


// addCountry("Cuba", displayCountries)






   











