// // Q1

// function showDateTime(){
// //     let rightNow = new Date()
// //     document.write(rightNow)
// // }
// // showDateTime()


// // // Q2

// // function addNumbers(num1,num2){
// //     return num1+num2
// // }

// // let number1 = Number(prompt("enter first number"))
// // let number2 = Number(prompt("enter second number"))
// // let sum = addNumbers(number1,number2)
// // alert("sum"+ sum)

// // addNumbers()

// // Q4

// function calculate(num1,operator,num2){


//  if(operator=="+"){
//     return num1+num2
//  }
//  else if(operator=="-"){
//     return num1-num2
//  }
//  else if(operator=="*"){
//     return num1*num2}
//     else if(operator =="/"){
//         return num1/num2}}
//     let Number1 = +prompt("Enter first number:")
//     let Number2 = +prompt("Enter second number")
//     let operator = prompt("Enter operator(+,-,*,/):")
//     let result=calculate(Number1,operator,Number2)
//     document.write("Result:" + result)

// Q5

// function  square(num){
//    return num*num
// }
// let result =square(5)
// document.write(result)


// Q6 

function factorial(num){
   let result = 1
   for(var i=1;i <=num;i++){

   }
   return result;

var answer= factorial(5)
document.write(answer)}

// Q7


// function counting(start,end){
//    for(var i=start; i<=end; i++){

   

// document.write(i+"<br>")}}


// var start = +prompt("enter starting number")
// var end = +prompt("enter ending number")
// counting(start,end)

// Q8

// function calculateHypotenuse(base,perpendicular){
//    function calculateSquare(number){
//       return number*number
//    }
//    let hypotenuse=Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular))
//    return hypotenuse
// }

// // let base =Number(prompt("Enter base"))
// // let perpendicular =Number(prompt("Enter perpendicular"))
// //  let result= calculateHypotenuse(base,perpendicular)
// //  document.write("Hypotenuse="+ result)


// // //  Q9
// // function calculateArea(width,height){
// // return width*height
// // }
// // let width=8
// // let height=5
// // let area =calculateArea(width,height)
// // // Document.write("Area =" + area)

// // // Q10

// // function checkPalindrome(word){
// //    let =reverseWord = word.split("").reverse().join("")

// //    if(word ===reverseWord){
// //       return "it is a palindrom"
// //    }
// //    else{
// //       return "it is not a palindrrome"
// //    }
// // }

// // let word = prompt("enter aword")
// // let result =checkPalindrome(word)
// // document.write(result)

// // Q11

// function capitalizeWords(sentence){
//    let words=sentence.split(" ")
//    for(var i=0; i<words.length;i++){
//       words[i]=
//       words[i].charAt(0).toUpperCase()+
//       words[i].slice(1)
//    }
//    return words.join("")
// }




// let sentence=prompt("Enter a sentence")

// let result=capitalizeWords(sentence)



// alert(result)




// Q12

// function findLongestWord(str){
//    let words = str.split(" ")
//    let longest =""
//    for (var i=0;i<words.length;i++){
//       if(words[i].length>longest.length){
//          longest=words[i]
//       }
//    }
//    return longest
// }
// let result=findLongestWord("web Development Tutorial")
// document.write(result)
// Q13

// function countLetter(string,letter){
//    var count =0
//    for(var i=0;i<string.length;i++){
//       if(string. charAt(i)===letter){
//          count++

//       }
//    }
//    return count
// }
// var result =
// countLetter("w3reasource.com" , "o")
// document.write(result)
// Q14

function calcCircumference(radius){
   var circumference =2*Math.PI*radius
   document.write("The circumference of a circle is" + circumference+ "<br>")

}
function calcArea(redius){
   var area=Math.PI*redius*redius
   document.write("The area of acircle is " +area)
}
calcCircumference(5)
calcArea(5)







 



