var character = prompt("write any character")
var asciicode = character.charCodeAt()
console.log(asciicode)

if(asciicode>=48 && asciicode<=57){
    alert("it is a number")
}

   else if(asciicode>=97 && asciicode<=122){
    alert("it is a lower case letter")
}

     else if(asciicode>=65 && asciicode<=90){
    alert("it is a upper case letter")
        

    

}
else{
    alert("invalid number")
}