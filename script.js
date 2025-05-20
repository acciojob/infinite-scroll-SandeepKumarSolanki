//your code here!

const list = document.getElementById('infi-list');
let itemCount = 0;

// Function to create and append list items
function addListItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addListItems(10);

// Scroll event listener
list.addEventListener('scroll', () => {
  // Check if user scrolled to bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addListItems(2); // Add 2 more items
  }
});
