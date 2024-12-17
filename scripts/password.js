// Get form and other DOM elements
const passwordRecoveryForm = document.getElementById("passwordRecoveryForm");
const emailInput = document.getElementById("mail");
const messageDiv = document.getElementById("message");

// Add form submission handler
passwordRecoveryForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    recoverPassword();
});

// Function to recover password
const recoverPassword = () => {
    const email = emailInput.value.trim(); // Get and trim email input
    const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve stored users

    // Search for the user by email
    const user = users.find((u) => u.email === email);
    console.log(user);
    if (user) {
        // Display password in a user-friendly way
        messageDiv.innerHTML = `Your password is: ${user.password}`;
        messageDiv.style.color = "green";
    } else {
        // Handle case when the email is not found
        messageDiv.innerHTML = `Email not found. Please try again`;
        messageDiv.style.color = "red";
    }
};
