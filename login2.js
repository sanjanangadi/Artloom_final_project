// Fetching user data from the Art Loom Database
fetch("https://mok-api-hola-ex.onrender.com/users")
  .then((req) => req.json())
  .then((data) => {
    console.log("Artisan Database Loaded");
    initLogin(data);
  })
  .catch((err) => {
    console.error("Error fetching users:", err);
  });

function initLogin(data) {
  // We select the elements inside the function to make sure they are ready
  let email_input = document.getElementById("email");
  let password_input = document.getElementById("password");
  let login_btn = document.getElementById("login-btn-form");

  if (login_btn) {
    login_btn.addEventListener("click", (e) => {
      e.preventDefault(); 
      
      let userEmail = email_input.value.trim().toLowerCase();
      let userPass = password_input.value.trim();
      let isFound = false;

      // Loop through the API data to find a match
      data.forEach((user) => {
        if (user.email.toLowerCase() === userEmail && user.password.toString() === userPass) {
          isFound = true;
          alert(`Welcome back to Art Loom, ${user.name}!`);
          
          // Save session
          localStorage.setItem("artloom_user", user.name);
          
          // Redirect to home
          window.location.href = "index.html"; 
        }
      });

      if (!isFound) {
        alert("Invalid Email or Password. Please try again.");
      }
    });
  } else {
    console.error("Critical Error: Login button with ID 'login-btn-form' not found!");
  }
}
