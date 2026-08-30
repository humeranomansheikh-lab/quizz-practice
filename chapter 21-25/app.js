// var firstName =prompt("enter your first name")
// var lastName =prompt("enter your last name")
// var fullName =firstName + " "+lastName
// alert("hello"+  fullName)



// // Question2

// var mobile =prompt("enter your favourite mobile phone")
// document.write("my favourite phone is" + mobile + "<br>")
// document.write("length of sting:" + mobile.length)

// Question 3

// var word ="pakistani"
// var index = word.indexOf("n")
// document.write("string:" + word + "<br>")
// document.write("indexOf 'n': " +index)

// Question 4

// var word = "Hello world"
// var index = word.lastIndexOf("l")
// document.write("string:" + word + "<br>")
// document.write("last index of 'l': " + index)

// // Question 5

// var word = "pakistani"
// var character =word.charAt(3)
// document.write("string:" + word + "<br>")
// document.write("charater at index  3:"  +character)

// Question 6


// var firstName =prompt("enter your first name")
// var lastName =prompt("enter your last name")
// var fullName =firstName.concat(" "  ,lastName)
// alert("hello"+  fullName)


// Question 7

// var city ="Hyderabad"
// var result = city.replace("Islamabad","Hyderabad")
// document.write("city after replacement:" + result)

// Question 8

// var message = "Ali and Sami are best friends."

// var result = message.replaceAll("and","&")
// document.write(result)

// Question 10


// var input = prompt("Enter some thing")
// var upperCase = input.toUpperCase()
// document.write("user input :"  +  input  +  "<br>")

// document.write("uppercase :"  +  upperCase)


// Question  11

// var input = prompt("enter somthing ")

// var titleCase =

// input.charAt(0).toUpperCase( )+
// input.slice(1).toLowerCase()
// document.write("user input :"  +  input   +  "<br>")
// document.write("titlecase:"  +  titleCase)


//Question 14
var order = prompt("ABC Bakery what do you want sir/ma'm")
var bakery = ["cake","apple pie","chips","patties"]
var flag = false
for(i=0; i<bakery.length; i++){
    if(bakery[i].toLowerCase()===order.toLowerCase()){
        var result =
        order.charAt(0).toUpperCase() + order.slice(1).toLowerCase()
        document.write(result + "is available in index" + i  +"in our bakery")
        flag=true
        break
    }
}
if (flag===false){
    if(bakery[i].toLowerCase()===order.toLowerCase()){

     var result =
        order.charAt(0).toUpperCase() + order.slice(1).toLowerCase()
    document.write("we are sorry"  + result +   "is not available in our bakery")
}

}









