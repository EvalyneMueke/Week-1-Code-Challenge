//Write that prompts the user to input student marks. 
//The input should be between 0 and 100. 
//Then output the correct grade: 

const prompt = require("prompt-sync")();
var marks = prompt("Enter your marks");
// marks between 79 and 100
if (marks > 79 && marks <= 100){
    console.log("A")
}
//marks between 60 and 79
else if (marks >= 60 && marks <= 79){
    console.log("B-");
}
//marks between 59 and 49
else if (marks>= 49 && marks <= 59){
    console.log("C-");
}
// marks between 48 and 40
else if(marks >=40 && marks <49){
    console.log("D-")
}
//marks below 40
else if (marks < 40 && marks >=0){
    console.log("E")
}
//marks thats not between 0 and 100
else {
    console.log("Invalid mark");
}
