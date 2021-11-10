let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItem);

function addItem(e) {
    e.preventDefault();
    
    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add Class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    let deleteBtn = document.createElement('button');

    // Add Classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Add text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
       if(confirm('Are You Sure')){
            e.target.parentElement.remove();
           
       }
    }
}

// Filter items
function filterItem(e){

    // Convert to lowercase
    let text = e.target.value.toLowerCase();
    
    // Get list
    let items = itemList.getElementsByTagName('li');

   // Convert to an array
   Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
   });
}
