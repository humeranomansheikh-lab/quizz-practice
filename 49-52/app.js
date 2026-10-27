

// // Q1

// var form=
// document.querySelector("#signupform")
// var result=
// document.querySelector("#result")
// form.addEventListener("submit",function(event){
//     event.preventDefault()
//     var name=
//     document.querySelector("#name").value
//     var email=
//      document.querySelector("#email").value
//      var password =
//       document.querySelector("#password").value
//       var age =
//        document.querySelector("#age").value
//        result.innerHTML=
//        "<h2>sign up data</h2>"+
//        "Name:"+name+"<br>"+
//        "Email:"+email+"<br>"+
//        "password:"+password+"<br>"+
//        "Age:"+ age


// })

// Q2

var moreText=
document.querySelector(".more")
var button=
document.querySelector(".readMore")
moreText.style.display="none"
button.addEventListener("click",function(){
    if(moreText.style.display==="none"){
        moreText.style.display="block" 
        button.innerText=
        "Read Less"
    }
    else
        {moreText.style.display="none"
        button.innerText="Read More"

    }
}
)


// Q3

var form=
document.querySelector("#studentForm")
var nameInput=
document.querySelector("#name")
var classInput=
document.querySelector("#className")
var marksInput=
document.querySelector("#marks")
var table=
document.querySelector("#studentTable")

form.addEventListener("submit",function(event){
    event.preventDefault()
    var name=nameInput.value
    var studentClass=classInput.value
    var marks=marksInput.value
    var row=document.createElement("tr")
    row.innerHTML=
    "<td>"+name+"</td>"+
    "<td>"+studentClass+"</td>"+
    "<td>"+marks+"</td>"+
    "<td>"+
    "<button class="deleteBtn">


})
