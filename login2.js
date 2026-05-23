666// Fetching user data from the Art Loom/Hola-Ex API
fetch("https://mok-api-hola-ex.onrender.com/users")
  .then((req) => {
    return req.json();
  })
  .then((data) => {
    // Initialize the login logic once data is fetched
    initLogin(data);
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });

// Select input elements
let email_data = document.getElementById("email");
let password_data = document.getElementById("password");
let login_btn = document.getElementById("login-btn");

/**
 * Attaches the event listener to the login button
 */
function initLogin(data) {
  console.log("Artisan Database Loaded");
  
  login_btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents page refresh on form submit
    checkCredentials(data);
  });
}

/**
 * Validates the user credentials
 */
function checkCredentials(data) {
  let isFound = false;

  data.forEach((element) => {
    if (element.email === email_data.value && element.password === password_data.value) {
      isFound = true;
      
      // Art Loom Branding: Personal welcome message
      alert(`Welcome back to Art Loom, ${element.name}!`);
      
      // Store user name locally so it can show on the Navbar
      localStorage.setItem("artloom_user", element.name);
      
      // Redirect to the main marketplace page
      window.location.href = "index.html"; 
    }
  });

  if (!isFound) {
    alert("Invalid Email or Password. Please try again.");
  }
}