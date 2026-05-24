// Fetching user data from the Art Loom/Hola-Ex API
fetch("https://mok-api-hola-ex.onrender.com/users")
  .then((req) => req.json())
  .then((data) => {
    initLogin(data);
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });

// Select input elements - Make sure these match your HTML IDs!
let email_data = document.getElementById("email");
let password_data = document.getElementById("password");
let login_btn = document.querySelector("button"); // Selects the login button

function initLogin(data) {
  console.log("Artisan Database Loaded", data);
  
  login_btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    console.log("Login button clicked!");
    console.log("Typed Email:", email_data.value);
    console.log("Typed Password:", password_data.value);
    checkCredentials(data);
  });
}

function checkCredentials(data) {
  let isFound = false;

  data.forEach((element) => {
    // Trim removes accidental spaces
    if (element.email.trim() === email_data.value.trim() && 
        element.password.toString().trim() === password_data.value.trim()) {
      isFound = true;
      
      alert(`Welcome back to Art Loom, ${element.name}!`);
      localStorage.setItem("artloom_user", element.name);
      window.location.href = "index.html"; 
    }
  });

  if (!isFound) {
    alert("Invalid Email or Password. Please try again.");
  }
}
