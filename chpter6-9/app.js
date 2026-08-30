var a = 10;
console.log(++a)
console.log (a++)
console.log(--a)
console.log(a--)

 


// ques2
Stage 1: --a
Operator: Pre-decrement (--)

Explanation: Decrements a by 1 before using its value. a changes from 2 to 1, and the expression evaluates to 1.

Current values: a = 1, b = 1

Stage 2: --a - --b
Operator: Pre-decrement (--) on b

Explanation: Decrements b by 1 before using its value. b changes from 1 to 0, and --b evaluates to 0.

Expression: 1 - 0

Result at this stage: 1

Current values: a = 1, b = 0

Stage 3: --a - --b + ++b

Operator: Pre-increment (++) on b

Explanation: Increments b by 1 before using its value. b changes from 0 to 1, and ++b evaluates to 1.

Expression: (1 - 0) + 1

Result at this stage: 2

Current values: a = 1, b = 1


// ques3
// Prompt the user to enter their name
var name = prompt("humera");

// Check if the user entered a name
if (name) {
    alert("Hello, " + humera + "! Welcome.");
} else {
    alert("Hello, stranger!");
}