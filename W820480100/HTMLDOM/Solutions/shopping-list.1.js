/* Log Messages */
function log(msg) {
  // Access the ordered list and save it in a variable
  const log = document.querySelector('section#log>ol');
  // Create a new list item element and save it in a variable
  const newItem = document.createElement('li');
  // Get the current date and save it in a variable
  const now = new Date();
  // Set the innerHTML of the new list item 
  newItem.innerHTML = now.toLocaleTimeString() + 
    ': <em>' + msg + '</em>';
  // Append the new list item to the ordered list
  log.appendChild(newItem);
}

/* Remove item from list */
function removeFromList(e) {
  log('Item Removed');
}

/* Add product to list */
function addToList(product) {
  log(product + ' added.');
}

function init() {
  log('Page Loaded');
}

window.addEventListener("load", init);