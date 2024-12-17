function logout() {
    localStorage.removeItem("current_user"); // Remove current user from localStorage
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to the login page
}
