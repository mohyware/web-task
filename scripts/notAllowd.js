function check() {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));

    if (currentUser) {
        return;
    } else {
        alert("No user is logged in. Redirecting to login page...");
        window.location.href = "../index.html"; // Redirect if no user is logged in
    }
}

// Call this function when the profile page loads
window.onload = check;
