# user.github.io
https://sonappatil.github.io/user.github.io/

Part1 :
Here are the identified bugs in the app.js:
1. There's a typo in the setTimeout function call. Instead of setTimout, it should be setTimeout.
2. In the displayUsers function, there's a typo in userListDiv, it should be usersListDiv.
3. In the displayUsers function, you're using userDiv.innerhtml to set the HTML content. It should be userDiv.innerHTML.
4. The argument passed to the fetchUsers callback is user, but the function expects users."fetchUsers((user) => { to fetchUsers((users) => {"
5. After the fetchUsers function call, there should be a semicolon to terminate the statement.

Part2:
1.Fetching Users from Local Storage or API:
First,  attempt to retrieve users from local storage using localStorage.getItem('users'). If there are no users in local storage, it returns an empty array.
If there are no user records found in the local storage, we create a simulated API call using setTimeout to fetch an initial set of user data.
We use a callback function to handle the retrieved users data. The callback function is designed to process the data, it comes from local storage or the API call.

2.Displaying Users:
The displayUsers function is responsible for rendering the list of users.
It clears the previous list using userListDiv.innerHTML = ''.
Then, it iterates through the users, it creats a new div element for each user.
It includes a "Delete" button for user removal.
Event listeners are added to the "Delete" buttons to trigger the deleteUser function.

3.Adding a New User:
The addUser function takes a userName as input.
It retrieves the existing users from local storage, creates a new user object with a unique ID, and pushes it to the array.
The updated user list is then stored in local storage, and fetchUsers is called to displayed the new user list.

4.Deleting a User:
The deleteUser function takes a userId as input.
It retrieves the current user list from local storage and filtered out the user with the specified ID.

5.Searching for Users:
The searchUsers function allows users to filter the displayed list based on a search query.
Then the list is then displayed using the displayUsers function.

6.Event Listeners
Event listeners are added to the "Add User" form and the "Search User" input.
When a new user is added or a search query is entered, these listeners trigger the respective functions (i.e., addUser or searchUsers) to update the user list.
