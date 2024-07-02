var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    // You can't reassign a const variable, so this will throw an error
    // leastFavoriteCustomer = 'unsuccessfully tries to reassign the least favorite customer';
    // Instead, you could log an error message or handle this differently:
    console.error('Cannot reassign the leastFavoriteCustomer');
}