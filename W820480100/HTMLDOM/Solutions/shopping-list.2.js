/* Log Messages */
function log(msg) {
  const log = document.querySelector('section#log>ol');
  const newItem = document.createElement('li');
  const now = new Date();
  newItem.innerHTML = now.toLocaleTimeString() + 
    ': <em>' + msg + '</em>';
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
  const btnListAdd = document.getElementsByClassName('btn-add');
  const btnAddNewItem = document.getElementById('add-new-item');
  const newItem = document.getElementById('new-item');
  newItem.focus();

  /* Add event listeners to all common list Add buttons */
  for (btn of btnListAdd) {
    btn.addEventListener('click', function(e) {
      const button = e.currentTarget;
      const product = button.name;
      addToList(product);
      newItem.focus();
    });
  }

  /* Add event listener to New Item Add button */
  btnAddNewItem.addEventListener('click', function() {
    addToList(newItem.value);
    newItem.value='';
    newItem.focus();
  });

  /* 
    Add event listener capturing Enter press while
    focus is on New Item field 
  */
  newItem.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      addToList(newItem.value);
      newItem.value='';
      newItem.focus();
    }
  });
}

window.addEventListener("load", init);