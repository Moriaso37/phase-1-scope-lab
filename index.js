// Declare customerName in the global scope
window.customerName = 'bob';

// Function to uppercase the customerName
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Function to set the bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Function that attempts to reassign a constant variable
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'someone';
  leastFavoriteCustomer = 'new person'; // This will throw an error
}
