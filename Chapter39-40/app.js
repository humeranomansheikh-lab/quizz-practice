 
//  function power(a,b){
//     var result=Math.pow(a,b)
//     return result
//  }
//  var a =prompt("Enter base")
//  var b =prompt("Enter power")
//  var answer=power(a,b)
//  document.write("Answer is " +answer)

//  Q2
// let year =prompt("Enter a Year")
// function checkLeapYear(year){
// if(year%4==0) {
//  alert(year + "is a leap Year") 

//  }
//  else{
//    alert(year +"is not a leap year")
//  }
   
// }   

// checkLeapYear(year)

// Q3

// let a= prompt("Enter side a")
// let b= prompt("Enter side b")
// let c= prompt("Enter side c")
// function findS(a,b,c){
//    return(Number(a)+ Number(b)+Number(c))/2
// }
// function findArea(a,b,c){
//    let s = findS(a,b,c)
//    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
// return area

//    }

// alert("Area of triangle is " + findArea(a,b,c))

// Q4
// function average(m1,m2,m3){
//    return(m1+m2+m3)/3
// }
// function percentage(m1,m2,m3){
//    let total =m1+m2+m3
//    return(total/300)*100
// }
// function main(){
//    let m1=Number(prompt("Enter marsk of subject1"))
//    let m2=Number(prompt("Enter marsk of subject2"))
//    let m3=Number(prompt("Enter marsk of subject3"))

//    let avg =average(m1,m2,m3)
//    let per = percentage(m1,m2,m3)
//    document.write("Average="+avg+"<br>")
//     document.write("percentage="+per+"%")

// }
// main()

// Q5

// function myIndexOF(str,charcter){
//    for(let i=0; i<str.leangth; i++){
//       if(str[i] == charcter){
//          return i
//       }
//    }

//    return -1

   
// }
// let result=myIndexOF("pakistan,k")

// document.write("Index is :"+result)


// Q6

// function deleteVowels(sentence){
//    let result=""
//    for(var i=0; i<sentence.length; i++){
//       if("aeiouAEIOU".indexOf(sentence[i])==-1){
//          result+=sentence[i]

//       }
//    }
//    document.write(result)
// }
// let sentence =prompt("Enter asentence (maximum 25 charachters:")
// deleteVowels(sentence)

// Q7

function countVowels(text){
   var count=0
   for(var i=0; i<text.length-1; i++){
      var pair=text[i]+text[i+1]
      switch(pair){
         case"aa":
         case"ae":
         case"ai":
         case"ao":
         case"au":
         case"ea":
         case"ei":
         case"eo":
         case"eu":
         case"ia":
         case"ie":
         case"ii":
         case"io":
         case"iu":
         case"ia":
         count++
         break
      }
   }
   return count
}
var sentence=prompt("enter a sentence")
var result=countVowels(sentence)
document.write("Number of vowels:"+ result)


// Q8

function meters(km) {
    console.log("Meters =", km * 1000);
}

function feet(km) {
    console.log("Feet =", km * 3280.84);
}

function inches(km) {
    console.log("Inches =", km * 39370.1);
}

function centimeters(km) {
    console.log("Centimeters =", km * 100000);
}

let km = Number(prompt("Enter distance in kilometers:"));

meters(km);
feet(km);
inches(km);
centimeters(km);

// Q9


function overtimePay(hours) {
    if (hours > 40) {
        let overtimeHours = hours - 40;
        let pay = overtimeHours * 12;

        console.log("Overtime hours =", overtimeHours);
        console.log("Overtime pay = Rs.", pay);
    } else {
        console.log("No overtime pay.");
    }
}

let hours = Number(prompt("Enter hours worked:"));

overtimePay(hours);





// Q10


function currencyNotes(amount) {
    let total = amount * 100;

    let notes100 = Math.floor(total / 100);
    total = total % 100;

    let notes50 = Math.floor(total / 50);
    total = total % 50;

    let notes10 = Math.floor(total / 10);

    console.log("Rs. 100 notes =", notes100);
    console.log("Rs. 50 notes =", notes50);
    console.log("Rs. 10 notes =", notes10);
}

let amount = Number(prompt("Enter amount in hundreds:"));

currencyNotes(amount);