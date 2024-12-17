function displayProfile() {
    const currentUser = JSON.parse(localStorage.getItem("current_user"));

    if (currentUser) {
        document.getElementById("fullnam").value = currentUser.fullName;
        document.getElementById("email").value = currentUser.email;
        document.getElementById("Phone").value = currentUser.phone;
        if (currentUser.gender === "male") {
            document.getElementById("genderVal").textContent = "Male";
        } else if (currentUser.gender === "female") {
            document.getElementById("genderVal").textContent = "female";
        }

    } else {
        alert("No user is logged in. Redirecting to login page...");
        window.location.href = "index.html"; // Redirect if no user is logged in
    }
}

// Call this function when the profile page loads
window.onload = displayProfile;
