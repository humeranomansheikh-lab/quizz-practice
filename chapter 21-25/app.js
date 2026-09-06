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
// var order = prompt("ABC Bakery what do you want sir/ma'm")
// var bakery = ["cake","apple pie","chips","patties"]
// var flag = false
// for(i=0; i<bakery.length; i++){
//     if(bakery[i].toLowerCase()===order.toLowerCase()){
//         var result =
//         order.charAt(0).toUpperCase() + order.slice(1).toLowerCase()
//         document.write(result + "is available in index" + i  +"in our bakery")
//         flag=true
//         break
//     }
// }
// if (flag===false){
//     if(bakery[i].toLowerCase()===order.toLowerCase()){

//      var result =
//         order.charAt(0).toUpperCase() + order.slice(1).toLowerCase()
//     document.write("we are sorry"  + result +   "is not available in our bakery")
// }

// // }

// // Q9
// var value="472"
// var numberValue=Number(value)
// document.write("value:" + numberValue+ "<br>")
// document.write("type:" + typeof+ numberValue)

// // Q12

// var num = 35.36
// var result = String(num).replace("."," ")

// document.write("Number:"+ num +"<br>")
// document.write("Result:" + result )

// Q13

// var userName=prompt("Enter your user name")
// var flag=false
// for(var i=0;i<userName.length;i++){
//     var code =userName.charAt(i)
//     if(code===33 || code===44|| code===64){
        

//     }
// }

// // Q13
// var userName=prompt("Enter your user name")
// for(var i=0; i<userName.length; i++){
//     var code = userName.charCodeAt(i)
//     if(code==33 ||code==44 || code==46 || code==64){
//         alert("please Enter a valid number ")
//         break
//     }

// }

// Q15

// var password =("enter your password")
// var firstChar=password.charCodeAt(0)
// var hasAlphabet=false
// var hasNumber=false
// for(var i=0; i<password.length; i++){
//     var code= password.charCodeAt(i)

//     if((code>=65 && code<=90) || (code>=97 && code<=122)){
//         hasAlphabet=true
        
//     }
//     if(code>=48 && code<=57){
//         hasNumber=true
//         }
//     }
//     if(hasAlphabet && hasNumber && password.length>=6 && !(firstChar>=48 && firstChar <=57)){
//         alert("valid password")

//     }
//     else{
//         alert("password is not valid please enter avalid password")
//     }


    // Q16

    // var university="univrsity of karachi"
    // var arr = university.split("")
    // for(var i=0; i<arr.length; i++){
    //     document.write(arr[i] + "<br>")
    // }

    // Q17

    var input =prompt("enter a word")
    var lastCarachter = input.charAt(input.length - 1)
    document.write("last character:" + lastCarachter)


    // Q18

    var arr ="The quick brown fox jumps over the lazy dog"
    var first= arr.toLowerCase().indexOf("the")
    var second= arr.toLowerCase().indexOf("the",first + 1)
    document.write("The word 'the' occurs 2 times")