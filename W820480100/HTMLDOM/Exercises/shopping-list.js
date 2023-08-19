/* Log Messages */
function log(msg) {
  // Your code here
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