function checkPassword() {
    var password = document.getElementById("password").value;
    var passwordHint = "Your Nickname.";

    if (password === "Loni") {
        alert("Correct password! Welcome.");
        // Redirect to the main content page
        window.location.href = "main.html";
    } else {
        alert("Incorrect password. Hint: " + passwordHint);
    }
}
