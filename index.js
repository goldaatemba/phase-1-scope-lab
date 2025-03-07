// Write your solution in this file!
// Declare customerName in global scope using var
var customerName = "bob";

// Function to uppercase the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare bestCustomer in global scope and assign it a value
function setBestCustomer() {
    bestCustomer = "not bob"; // Implicit global variable (bad practice, but for learning purposes)
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = "someone";

// Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "someone else"; // This will throw an error
}
