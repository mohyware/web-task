const signupForm = document.getElementById("signupForm");
const records = JSON.parse(localStorage.getItem("users")) || [];

// Function to save all records to localStorage
const saveRecords = () => {
    localStorage.setItem("users", JSON.stringify(records));
};

// Function to check if an email already exists
const emailExists = (email) => {
    return records.some((record) => record.email === email);
};

// Function to add a new user
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullnam").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("Phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const password = document.getElementById("password").value;

    if (!fullName || !email || !phone || !gender || !password) {
        alert("All fields are required.");
        return;
    }

    if (emailExists(email)) {
        alert("Email already exists.");
        return;
    }

    // Save new user
    const newUser = { fullName, email, phone, gender, password };
    records.push(newUser);
    saveRecords();

    alert("User registered successfully!");
    signupForm.reset();
    displayUsers(); // Refresh the user list
});

// Function to display all users
const displayUsers = () => {
    console.log(records)
};


// Function to find a user by email and password
const findUser = (email, password) => {
    const user = records.find((record) => record.email === email && record.password === password);
    return user || null;
};

// Initialize user list on page load
displayUsers();
