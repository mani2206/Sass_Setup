    // Arrow fn 

    let array = [1, 3, 5, 8, 9, 7, 6, 2];
  
    let sumOfElements = 
    array.reduce((a, b) => a + b);
    console.log(sumOfElements);
  
    let multiplyElements = 
    array.map((element) => element * 10);
    console.log(multiplyElements);
  
    let filterElements = array.filter(
    (element) => element % 2 === 0);
    console.log(filterElements);


    // 41
    // [
    // 10, 30, 50, 80,
    // 90, 70, 60, 20 
    // ]
    // [ 8, 6, 2 ]

    // Callback hell
    // f1(function(x){
    //     f2(x, function(y){
    //         f3(y, function(z){ 
    //             ""
    //         });
    //     });
    // }); 

    // Promises
    // const myPromise = new Promise((resolve, reject) => {
    //     if (Math.random() > 0) {
    //         resolve('Hello, I am positive number!');
    //     }
    //     reject(new Error('I failed some times'));
    // })

    // // Then
    // var promise = new Promise(function(resolve, reject) { 
    //     resolve('Hello, I am a Promise!'); 
    // }) 
      
    // promise.then(function(promise_kept_message) {  
    //         console.log(promise_kept_message); 
    //             }, function(error) {     
      
    //         // This function is invoked this time
    //         // as the Promise is rejected.
    //         console.log(error);   
    //     }) 


    // // Catch Error
    // const myPromise = new Promise((resolve, reject) => {
    //     if (Math.random() > 0) {
    //         console.log('resolving the promise ...');
    //         resolve('Hello, Positive :)');
    //     }
    //     reject(new Error('No place for Negative here :('));
    // });
    
    // const Fulfilled = (fulfilledValue) => console.log(fulfilledValue);
    // const Rejected = (error) => console.log(error);
    // myPromise.then(Fulfilled, Rejected);
    
    // myPromise.then((fulfilledValue) => {
    //     console.log(fulfilledValue);
    // }).catch(err => console.log(err));
    

// Swapping
{/* <script> */}
var names = ["alpha", "beta", "gamma", "delta"];
  
console.log(firstName);//"alpha"
console.log(secondName);//"beta"
  
//After swapping
[firstName, secondName] = [secondName, firstName]
      
console.log(firstName);//"beta"
console.log(secondName);//"alpha"
// </script>

// Multiline Strings
{/* <script type="text/javascript"> */}
function showMultiline() {
    multilineString = 
        `<div>
            <h3>This is the heading</h3>
            <p>
                This is a paragraph. This uses
                template literals that were
                added in ES6 of JavaScript
            </p>
        </div>`
      
    document.querySelector('.multiline').innerHTML
            = multilineString;

    // Backslash Method
    function showMultiline() {
        multilineString = 
            "<div> \
                <h3>This is the heading</h3> \
                <p>This is a paragraph \
                This uses backslashes in place\
                of new lines</p> \
            </div>"
   
        document.querySelector('.multiline').innerHTML
                = multilineString;
    }

    // Concatenating Method
    function showMultiline() {
        multilineString = 
            "<div>" +
                "<h3>This is the heading</h3>" +
                "<p>This is a paragraph" +
                "This uses simple concatenation " +
                "of strings for every line</p> " +
            "</div>"
   
        document.querySelector('.multiline').innerHTML
                = multilineString;
    }
}
// </script>

// Default Paramters 

// Before
function multiply(a, b) {
    return a * b;
}

let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);

// after
function multiply(a, b = 2) {
    return a * b;
}

let num1 = multiply(5);
console.log(num1);
let num2 = multiply(5, 8);
console.log(num2);

// Template Literals
<script>
const str1 = `Hi, GeeksforGeeks Learner`;
console.log(str1);
  
const str = "GeeksforGeeks";
const str2 = `Hi, ${str} Learner`;
console.log(str2);
</script>

// For Spacing
console.log("There will be a tab space after this"
    + "\t" + "end of string.");
console.log("First Line" + "\n" + "Second Line");
  
console.log(`There will be a tab space    after this end of string.`);
console.log(`First Line 
Second Line`);

// op:
// There will be a tab space after this    end of string.
// First Line
// Second Line
// There will be a tab space after this    end of string.
// First Line
// Second Line

// Enhanced Object Literals
var name = "Duke";
var color = "Brown";
var age = 5;
  
// Using Object Literal Enhancement
// Combines all variables into a dog object
var dog = {name, color, age};
console.log(dog);

// op:
// {
//     name:"Duke",
//     color:"Brown",
//     age:5
// }

var name = "Tike";
var color = "Black";
var age = 7;

// function declaration
var bark = function(){
	console.log("Woof Woof!!");
}

// Using Object Literal Enhancement
// combines all variables into an anotherDog object
var anotherDog = {name, color, age, bark};
anotherDog.bark();

// o/p:Woof Woof!!

 // Variable declaration
 var name = "Lilly";
 var color = "White";
 var age = 3;

 // function declaration 
 // using "this" keyword to access the object keys.
 var barkWithName = function(){
     console.log('Woof Woof!!, I am '
     +this.name+' and I am a '
     +this.age+' years old, '
     +this.color+ ' coloured dog.Woof Woof!!');
 }

 // Using Object Literal Enhancement
 // combines all variables into a yetAnotherDog object
 var yetAnotherDog = {name, color, age, barkWithName};
 yetAnotherDog.barkWithName();

//  o/p:Woof Woof!!, I am lilly and I am a 3 years old,
//  white coloured dog.Woof Woof!!



//  Object literal enhancement allows us to pull global variables into objects and reduces typing by making the function keyword unnecessary.
 
// No need of fn
// Old syntax
var driver1 = {
    name: "John",
    speed: 50,
    car:"Ferrari",
    speedUp: function(speedup){
         this.speed = this.speed + speedup;
         console.log("new speed = "+ this.speed)
    }
}
  
// New syntax without function keyword
const driver2 = {
    name: "Jane",
    speed: 60,
    car:"McLaren",
    speedUp(speedup){
         this.speed = this.speed + speedup;
         console.log("new speed = "+ this.speed)
    }
}

// Class


class gfg {

	// Constructor
	constructor(name, estd, rank){
		this.n = name;
		this.e = estd;
		this.r = rank;
	}

	// Function
	decreaserank(){
		this.r -= 1;
	}
}
const geeks = new gfg("geeks", 2009, 43)
	
geeks.decreaserank();
	
document.write(geeks.r); //Output 42



// inheritance
class geeks {
constructor(g) {
	this.Character = g
}
}
class GeeksforGeeks extends geeks {
disp() {
	console.log("No of Character: "+this.Character)
}
}
var obj = new GeeksforGeeks(13);
obj.disp()



// <script>
class GeeksforGeeks {
doPrint() {
	console.log("This doPrint() from Parent called.")
}
}
class gfg extends GeeksforGeeks {
doPrint() {
	super.doPrint()
	console.log("This doPrint() is printing a string.")
}
}
var obj = new gfg()
obj.doPrint()
// </script>

// op:

// This doPrint() from Parent called.
// This doPrint() is printing a string.


// asyn
const getData = async() => {
	var data = "Hello World";
	return data;
}

getData().then(data => console.log(data));

// await
// const getData = async() => {
// 	var y = await "Hello World";
// 	console.log(y);
// }


console.log(1);
getData();
console.log(2);

// 1
// 2
// Hello World

