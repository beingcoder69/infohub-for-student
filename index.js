document.getElementById("Login").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const validUsers = {
        "alif": "infohub",  // Example username-password pair
        "admin": "bangladesh"  // Another example username-password pair
    };

    const usernameInput = document.getElementById("Username").value.trim(); // Trim whitespace
    const passwordInput = document.getElementById("password").value.trim(); // Trim whitespace
    const errorMessage = document.getElementById("errorMessage");

    if (validUsers[usernameInput] === passwordInput) {
        const validPasswords = {
            "infohub": "home.html",
            "bangladesh": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        };
        window.location.href = validPasswords[passwordInput]; // Redirect if username and password are correct
    } else {
        errorMessage.textContent = "❌ Invalid username or password. Try again!";
        errorMessage.style.color = "red";
    }
});
