// app.js
// Function to fetch users from local storage or fetch from API
function fetchUsers(callback) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) ;
    if (!storedUsers || storedUsers.length === 0) {
        // Simulated user data fetch function (meant to represent an API call)
        setTimeout(() => {
            const initialUsers = [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Catherine' }
            ];
            localStorage.setItem('users', JSON.stringify(initialUsers));
            callback(initialUsers);
        }, 1000);
    } else {
        callback(storedUsers);
    }
}

// Function to display users
function displayUsers(users) {
    const userListDiv = document.querySelector('#usersList');
    userListDiv.innerHTML = ''; // Clear the previous list
    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `${user.name}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteUser(user.id);
        });

        userDiv.appendChild(deleteButton);
        userListDiv.appendChild(userDiv);
    });
}

// Function to add a new user
function addUser(userName) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) ;
    const newUser = { id: Date.now(), name: userName };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    fetchUsers(displayUsers);
}

// Function to delete a user by ID
function deleteUser(userId) {
    let storedUsers = JSON.parse(localStorage.getItem('users')) ;
    storedUsers = storedUsers.filter((user) => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    fetchUsers(displayUsers);
}

// Function to search for users by name
function searchUsers(query) {
    const storedUsers = JSON.parse(localStorage.getItem('users')) ;
    const filteredUsers = storedUsers.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );
    displayUsers(filteredUsers);
}

// Fetch and display users
fetchUsers(displayUsers);

// Event listener for the Add User form
const userForm = document.querySelector('#userForm');
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUserName = document.querySelector('#newUserName').value;
    addUser(newUserName);
    document.querySelector('#newUserName').value = '';
});

// Event listener for the Search User input
const searchUserInput = document.querySelector('#searchUser');
searchUserInput.addEventListener('input', () => {
    const query = searchUserInput.value;
    searchUsers(query);
});
