// Handle user registration
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Save the user data to local storage
    const users = JSON.parse(localStorage.getItem('users')) || {};
    users[username] = password; // Store password (you should hash this in production)
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    window.location.href = 'index.html'; // Redirect to login page
});

// Handle user login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    // Check if username and password match
    if (users[username] && users[username] === password) {
        alert('Login successful!');
        window.location.href = 'game.html'; // Redirect to game page
    } else {
        alert('Invalid username or password.');
    }
});
