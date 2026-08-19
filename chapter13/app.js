
// question 1


// var studentName = [];

// // question2
// var studentNames = new Array();

// // question3

// var strings = ["Apple", "Banana", "Mango"];

// // question4

// var numbers = [10,20,24];

// // ques5
// var booleanArray = [true, false, true, false];
// // question6
// var mixedArray = ["Ali", 25, true, "Karachi"];
// // question7
var qualifications = ["SSC", "HSC", "BCS", "BS", "MS", "M.Phil", "PhD"];
document.write('<h1>Qualifications</h1>')
document.write('<ol>')
document.write("<li>" + qualifications[0] + "</li>")
document.write("<li>" + qualifications[1] + "</li>")
document.write("<li>" + qualifications[2] + "</li>")
document.write("<li>" + qualifications[3] + "</li>")
document.write("<li>" + qualifications[4] + "</li>")
document.write("<li>" + qualifications[5] + "</li>")
document.write("<li>" + qualifications[6] + "</li>")











document.write("</ol>")





// // question8

// var studentName = ['Maechael','jhon','tony'];
// var score = [320,230,480];
// var totalMarks  =[500];
// var percentage1 =(score[0]/totalMarks)*100;
// var percentage2 =(score[1]/totalMarks)*100;
// var percentage3 =(score[2]/totalMarks)*100;
// document.write(studentName[0] + " ka score " + score[0] + " percentage " + percentage1 + "<br>");
// document.write(studentName[1] + " ka score " + score[1] + " percentage " + percentage2 + "<br>");
// document.write(studentName[2] + " ka score " + score[2] + " percentage " + percentage3);

// // question9
// var color = ['red','green','blue'];
// console.log(color)
// var colorBiginning = prompt("what color you want to add at biginnig");
// color.unshift(colorBiginning);
// console.log(colorBiginning);
// var colorEnd = prompt("Which color do you want to add at the end?");
// color.push(colorEnd);

// document.write("After adding at end: " + color + "<br><br>");
// // c
// color.unshift("orange","black")
// question10
// var score = [320,230,480,120]
// score.sort()
// console.log(score)

// // question11

// var cities = ["karachi","lahore","islamabad","quetta","peshawar"]
// var selctedCities = cities.slice(0,2)
// console.log(selctedCities)

// // Question12
// var arr = ['This','is','my','cat']
// var text =arr.join(' ')
// console.log(text)

// Question13

// LIFO
var stack = [];
stack.push("A")
stack.push("B")
stack.push("C")

console.log(stack)
console.log(stack.pop())
console.log(stack)

// FIFO

var queue = [];
queue.push("a")
queue.push("b")
queue.push("c")
console.log(queue.shift())
console.log(queue)

// Question14
var devices = ["keyboard","mouse","priter","monitor"]
console.log(devices.pop())
console.log(devices.pop())
console.log(devices.pop())
console.log(devices.pop())

// Question15

var phoneManufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Huawea"]
var select =
document.createElement("select")
for (var i=0; i<phoneManufacturers.length; i++){
    var option = 
    document.createElement("option")
    option.text =
    phoneManufacturers[i]
    select.appendChild(option)
}
document.body.appendChild(select)





