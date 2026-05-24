console.log("Art Loom System Connected");
const API = `https://mok-api-hola-ex.onrender.com`

const inpCategory = document.getElementById("inp-car");
const inpBrand = document.getElementById("inp-brand");
const inpModel = document.getElementById("inp-model");
const inpColor = document.getElementById("inp-color");
const inpCondition = document.getElementById("inp-condition");
const inpKM = document.getElementById("inp-km");
const inpYear = document.getElementById("inp-year");
const inpFuel = document.getElementById("inp-fuel");
const inpimg1 = document.getElementById("inp-img1");
const inpimg2 = document.getElementById("inp-img2");
const inpimg3 = document.getElementById("inp-img3");
const inpPrice = document.getElementById("inp-price");
const inpName = document.getElementById("inp-name");
const inpCity = document.getElementById("inp-city");
const inpState = document.getElementById("inp-state");
const btnpost = document.getElementById("btn-post");
const mainsellDiv = document.getElementById("mainBox");

btnpost.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Post button clicked");
  const obj = createObj();
  postData(obj);
  
  // Professional message for Artisans
  mainsellDiv.innerHTML = `<h2 style="text-align:center; color:green; padding:50px;">Your Artwork has been posted successfully to Art Loom!</h2>`
  
  setTimeout(() => {
    location.href = `category.html`
  }, 2000)
});

function createObj() {
  const obj = {
    brand: inpBrand.value,      // This is now Artisan Name
    model: inpModel.value,      // This is Product Type
    category: inpCategory.value,
    year: inpYear.value,       // This is Quantity
    color: inpColor.value,
    price: inpPrice.value,
    condition: inpCondition.value,
    transmission: "Handmade",   // Changed from Manual
    fuel_type: inpFuel.value,   // This is Material Type
    owner: "Original",          // Changed from 3rd
    engine: "Authent
