// chapter: 31-34

// Q1

// var rightnow=new Date()
// document.write(rightnow)
// Q2

// var date = new Date()
// var month=date.getMonth()
// var months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// alert(months[month])

// // Q3

// var day=new Date().toString().slice(0,4)
// alert("today is"  +day)
// // Q4

// let today= new Date()
// let day = today. getDay()
// if(day==0 || day==6){
//     alert("its Fun day")

// }

// Q5

// let today =new Date()
// let date =today.getDate()
// if(date<16){
//     alert("first fifteen days")
// }
// else{
//     alert("last days of the month")
// }

// Q6

// let rightNow = new Date()
// let minutes = Math.floor(rightNow.getTime()/(1000*60))
// alert(minutes)

// let minutes = Math.floor(new Date().getTime()/(1000*60))
// alert(minutes)

// let milliseconds= new Date().getTime()
// console.log(milliseconds)

// Q7


//  let hour= new Date().getHours()
//  if(hour<12){
//     alert("its a.m")
//  }
//  else{
//     alert("its p.m")

//  }
//  Q8
let laterDate =new Date(2020,11,31)
document.write(laterDate)

// Q9

// let ramazan =new Date(2015,5,18)
// let today =new Date()
// let timeDiff =today-ramazan
// let dayPassed =Math.floor(timeDiff/(1000*60*60*24))
// alert(dayPassed + "days have passed since first ramazan 2015")


// Q10

// let referanceDate =new Date(december 5,2015,22:50:16 GMT+0500)
// let bigningOf2015 = new Date("january 1,2015")
// let timeDiff = referanceDate - bigningOf2015
// let secondsPassed = Math.floor(timeDiff/1000)
// // Q11




// let rightNow =new Date()
// let hours =rightNow.getHours()
// rightNow.setHours(hours+1)
// document.write(rightNow)



// 12

// let rightNow = new Date()
// let oldDate = new Date()
// oldDate.setFullYear(rightNow.getFullYear()-100)
// alert(oldDate)

// // 13

// let age = prompt("Enter your age")

// let currentYear =new Date().getfullYear()
// let birthYear = currentYear-age
// document.write("your birth year is" +  birthYear)

// 14

let customerName = prompt("Enter customer name")

let units = prompt("Enter number of units")

let chargesPerUnit = 16
let netAmount = units*chargesPerUnit
let surcharges = netAmount*0.10
let grossAmount = netAmount+surcharges
let currentMonth = new Date().toLocaleString("default",{
    month: "long"
})
document.write("customer Name:"+ customerName+ "<br>")
document.write("current month:"+ currentMonth+ "<br>")
document.write("number of units:"+ units+"<br>")
document.write("charges per unit:"+ chargesPerUnit.toFixed(2)+ "<br>")
document.write("net amount payable:"+netAmount+toFixed(2)+"<br>")
document.write("let payment surcharges:"+ surcharges.toFixed(2)+ "<br>")
document.write("gross amount payable(after due date):"+grossAmount.toFixed(2))


