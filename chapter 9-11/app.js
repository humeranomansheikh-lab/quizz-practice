
// chapter 9=11
// // l
var city =prompt("tell me your city name");
if (city=="karachi") 
{
    alert("wellcome to city of light")
    
}
// question

var gender =prompt("tell me your gender");
if (gender=="male")
     {
        alert("well come to sir");
    }
            
         else if(gender== "female");
        {
            alert("well come to mam'm");
        }


    // 

        var color =prompt("enter traffic signal color");
        if (color=="red")
        {
            alert("Must stop");
        }
        else if(color=='green')
        {
            alert("Move now");

        }
        else if(color=="yellow")
        {
            alert("Ready to move");
        }

        // question4
        var fuel =prompt("how much fuel in car");
        if(fuel<0.25+"litters")
        {
            alert("pleas refill the fuel in your car");
         } else {
            alert("fule is enough");
        }


        // ques6
        var totalMarks = +prompt('Enter your total marks');
        var sub1 = +prompt("Enter subject 1 Marks");
                var sub2 = +prompt("Enter subject 2 Marks");
                        var sub3 = +prompt("Enter subject 3 Marks"); 


var obtained =sub1 + sub2 + sub3
var percentage = (obtained / totalMarks) * 100;
alert('percentage:' +percentage + "%");

if (percentage>=80){
    alert("grade A+1  remarks Excellent");
}

// question5

var a = 4
if (++a === 5) {
        alert("given condition for variable is true")
}

// b
var b = 83
if (++b === 83){
    alert("given condition for variable is true")
}
// c
c. var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true");
}
// d
d. var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 


// question6
if (percentage>=80){
    document.write("grade :A-One<br>")
    document.write("Remarks : Excellent")
}


else if (percentage>=70){
    document.write("grade :A<br>")
    document.write("Remarks Good")
}
else if (percentage>=60){
    document.write("grade :B<br>")
    document.write("Remarks :you need to improve")
}



var secretNumber = 7; // You can also generate one randomly: Math.floor(Math.random() * 10) + 1

var userGuess = Number(prompt("Guess the secret number between 1 and 10:"));


if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again! The secret number was " + secretNumber);
}
// ques 8


var userNumber = Number(prompt("Enter a number to check if it's divisible by 3:"));


if (userNumber % 3 === 0) {
    alert("The number " + userNumber + " is divisible by 3.");
} else {
    alert("The number " + userNumber + " is not divisible by 3.");
}


// question9

var inputNumber = Number(prompt("Enter a number to check if it's even or odd:"));


if (inputNumber % 2 === 0) {
    alert(inputNumber + " is an even number.");
} else {
    alert(inputNumber + " is an odd number.");
}



// ques10
var T = Number(prompt("Enter the current temperature:"));


if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today’s Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is extremely cold outside!");
}





// ques11
Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user.




// Take inputs from the user
var firstNumber = Number(prompt("Enter the first number:"));
var secondNumber = Number(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

// Perform calculation based on the selected operation
if (operation === "+") {
    result = firstNumber + secondNumber;
    alert(firstNumber + " + " + secondNumber + " = " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert(firstNumber + " - " + secondNumber + " = " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert(firstNumber + " * " + secondNumber + " = " + result);
} else if (operation === "/") {
    if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
        alert(firstNumber + " / " + secondNumber + " = " + result);
    }
} else if (operation === "%") {
    if (secondNumber === 0) {
        alert("Error: Cannot calculate remainder with zero.");
    } else {
        result = firstNumber % secondNumber;
        alert(firstNumber + " % " + secondNumber + " = " + result);
    }
} else {
    alert("Invalid operator! Please enter one of +, -, *, /, or %.");
}
