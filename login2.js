// Fetching user data from the Art Loom/Hola-Ex API
fetch("https://mok-api-hola-ex.onrender.com/users")
  .then((req) => req.json())
  .then((data) => {
    // Start the login system once the data is ready
    initLogin(data);
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });

// Select input elements
let email_data = document.getElementById("email");
let password_data = document.getElementById("password");
// We select by the specific ID we used in the HTML
let login_btn = document.getElementById("login-btn-form"); 

function initLogin(data) {
  console.log("Artisan Database Loaded");
  
  // If the button exists, wait for a click
  if (login_btn) {
    login_btn.addEventListener("click", (e) => {
      e.preventDefault(); 
      console.log("Login attempt for:", email_data.value
