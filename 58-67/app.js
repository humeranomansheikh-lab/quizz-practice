let mainContent =
document.getElementById("main-content")
console.log(mainContent)

// PART 2

var children = mainContent.children;

for (var i = 0; i < children.length; i++) {
    console.log(children[i])}
// part3

    var renderElements = document.getElementsByClassName("render");

for (var i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML + "<br>")}
