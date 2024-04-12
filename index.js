// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior
  
  // Get form inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create user object
  const user = {
    username,
    email,
    phone
  };

  // Call function to save user
  saveUser(user);
}

// Function to save user
async function saveUser(user) {
  try {
    const response = await axios.post('https://crudcrud.com/api/39bb511afcab4468aa3d2f6abdddbd82', user); // Replace 'your-endpoint' with your actual CRUD API endpoint
    console.log('User saved:', response.data);
    fetchUsers(); // Fetch users after saving
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

// Function to fetch all users
async function fetchUsers() {
  try {
    const response = await axios.get('https://crudcrud.com/api/your-endpoint'); // Replace 'your-endpoint' with your actual CRUD API endpoint
    const users = response.data;
    displayUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Function to display users on the screen
function displayUsers(users) {
  const userList = document.querySelector('ul');
  userList.innerHTML = ''; // Clear previous user list
  
  users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
    userList.appendChild(listItem);
  });
}

// Fetch users when the DOM content loads
document.addEventListener('DOMContentLoaded', fetchUsers);

// Do not touch the code below
module.exports = handleFormSubmit;


