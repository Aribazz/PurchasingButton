// Create two variables, firstName and lastName
// Concatenate the two variables into a third variable called fullName
// Log fullName to the console
//ANSWER::
// let firstName = "Ariyo";
// let lastName = "Sunday";

// let fullName = firstName +""+ lastName;

// console.log(fullName);

// let names = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi there, Linda!" when called
// function intro (){
//     console.log(greeting +", " + names + "!");
// }
// intro();

let myPoints = 3
// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

function add3Points (){
    myPoints = myPoints + 3;
    // myPoints += 3;
}
function remove1Point (){
    myPoints = myPoints - 1;
    // myPoints += -1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// Call the functions to that the line below logs out 10
console.log(myPoints)

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My point: 59
console.log(2 + 2) //  4
console.log("11" + "14") // 1114

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let para = document.getElementById("error");
function buy() {
    console.log("Something went wrong, please try again");
     para.textContent= "Something went wrong, please try again";
}

function clicked() {
    console.log("button clicked") 
    para.innerText = "Try Purchasing the next item."  
}