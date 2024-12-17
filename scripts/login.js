const records = JSON.parse(localStorage.getItem("users")) || [];
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(records)
    const email = document.getElementById("loginMail").value.trim();
    const password = document.getElementById("loginPassword").value;

    // Check if email and password match an existing user
    const user = records.find((record) => record.email === email && record.password === password);

    if (user) {
        alert(`Welcome back, ${user.fullName}!`);

        // Store the logged-in user in localStorage
        localStorage.setItem("current_user", JSON.stringify(user));

        // Redirect to another page or perform any post-login action
        window.location.href = "home.html"; // Example redirection
    } else {
        alert("Invalid email or password. Please try again.");
    }
});