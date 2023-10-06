# user.github.io
https://sonappatil.github.io/user.github.io/

Part1 :
Here are the identified bugs in the app.js:
1. There's a typo in the setTimeout function call. Instead of setTimout, it should be setTimeout.
2. In the displayUsers function, there's a typo in userListDiv, it should be usersListDiv.
3. In the displayUsers function, you're using userDiv.innerhtml to set the HTML content. It should be userDiv.innerHTML.
4. The argument passed to the fetchUsers callback is user, but the function expects users."fetchUsers((user) => { to fetchUsers((users) => {"
5. After the fetchUsers function call, there should be a semicolon to terminate the statement.
