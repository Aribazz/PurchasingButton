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
    para.innerText = "This product will be available(Try check back)"  
}

// ADDITIONAL WORKS
// Select elements
const cartItems = document.querySelector('.cart-items');
const totalAmount = document.getElementById('total-amount');

// Array to store cart data
let cart = [];

// Add event listeners to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);

        // Add product to cart
        const existingProduct = cart.find((item) => item.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        updateCart();
    });
});

// Function to update cart
function updateCart() {
    // Clear cart display
    cartItems.innerHTML = '';

    // Update cart display
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;

        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(listItem);
    });

    // Update total
    totalAmount.textContent = total.toFixed(2);
}

// INPUT SECTION
const sendButton = document.getElementById("sendButton");
const Input = document.getElementById("userInput");

// Array to temporarily store data
const storedData = [];

// Function to store data and display it
function storeData(data) {
    storedData.push(data);

        // Update the displayed list
        const listItem = document.createElement('li');
        listItem.textContent = data;
    }
    

// Event Listener for the Send Button
sendButton.addEventListener('click', () => {
    const inputData = Input.value.trim(); // Get the input value and trim whitespace

    if (inputData) {
        storeData(inputData); // Store the data locally
        // sendDataToDatabase(inputData); // Send the data to the database
        Input.value = ''; // Clear the input field
    } else {
        alert('Please enter some data before sending!');
    }
});