// Question1
var moltiDimentionalArry = [[],[]]

// Question2
// var matrics = [

//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write(matrics[0]+ "<br>")
// document.write(matrics[1]+ "<br>")
// document.write(matrics[2])

// // Question3
// for (var i=0; i<=10; i++){
//     document.write(i+"<br>")
// }

// // Question4
// var table= +prompt("Enter anumber to show its multipilication table")
// var lenth= +prompt("enter lenth of table")


// for(var i=1;i<=lenth; i++){
//     document.write(table +"x"+ i +"="+(table*i)+"<br>")
// }




// // Question5
// var fruits =["apple","mango","banana","orange"]
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i]+"<br>")
// }

// Question
// for (var i=1;i<=15; i++)
//     document.write(i+"<br>")



// for (var i=10; i>=1; i--){
//     document.write(i+"<br>")
//     }


// for (var i=0; i<=20; i+=2){
//     document.write(i+"<br>")
// }
// for (var i=1; i<=19; i+=2){
//     document.write(i+"<br>")
// }


// for (var i=2; i<=20; i+=2){
//     document.write(i+"k"+"<br>")
// }


// var A = ["cake","apple pie","cookie","chips","patties"]
// var search = prompt("Well come to ABC bakery. What do you want sir / mamm")
// document.write(search)

// var flag = false

// for(var i=0; i<A.length; i++){
//     if(A[i]===search){
//         flag = true
//         break;
//     }
// }
// if(flag===true){
//     alert(search + "available in index" + i + "in our bakery")
// }
// else{
//     alert(search + "is not available in our bakery")
// }

var a=[24,53,78,91,12]
var largest= a[0]
for (var i=1; i < a.length; i++){
    if(a[i] > largest){
        largest= a[i]
    }

}
alert("the largest number is" +  largest)



// Question
var a=[24,53,78,91,12]
var smallest=a[0]
for (var i=1; i<a.length; i++){
    if(a[i]< smallest){
        smallest=a[i]
    }
}
alert("smallest  number is:" + smallest)

// Question


for (var i=5; i<=200; i+=5)
    document.write(i+ "<br>")
