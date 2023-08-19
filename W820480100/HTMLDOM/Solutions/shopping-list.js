/* Log Messages */
function log(msg) {
  const log = document.querySelector('section#log>ol');
  const newItem = document.createElement('li');
  const now = new Date();
  newItem.innerHTML = now.toLocaleTimeString() + ': <em>' + msg + '</em>';
  log.appendChild(newItem);
}

/* Remove item from list */
function removeFromList(e) {
  const item = e.currentTarget.parentNode;
  item.remove();
  log(item.title + ' removed.');

  // Check if list item being removed is in common list items
  //  If it is, we need to enable its button there.
  const selector = '#common-items-list>li>button[name="' + item.title + '"]';
  const btnMatch = document.querySelector(selector);
  if (btnMatch) {
    btnMatch.disabled = false;
  }
}

/* Add product to list */
function addToList(product) {
  product = product.trim();

  // Check if list item is already in active list
  //  or if product is empty string.
  let selector = '#active-items-list>li[title="' + product + '"]';
  const liMatch = document.querySelector(selector);
  if (liMatch || !product.length) {
    return false;
  }
  const activeList = document.getElementById('active-items-list');
  const newItem = document.createElement('li');
  newItem.title = product;
  newItem.innerHTML = product + ' ';
  activeList.appendChild(newItem);
  log(product + ' added.');

  const btnRemove = document.createElement('button');
  btnRemove.innerHTML = '-';
  btnRemove.addEventListener('click', removeFromList);
  newItem.appendChild(btnRemove);

  // Check if list item being added is in common list items
  // If it is, we need to disable its button there.
  selector = '#common-items-list>li>button[name="' + product + '"]';
  const btnMatch = document.querySelector(selector);
  if (btnMatch) {
    btnMatch.disabled = true;
  }
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