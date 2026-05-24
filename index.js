// ART LOOM CORE LOGIC

// 1. Elements
const stateBtn = document.getElementById("state-btn");
const stateList = document.getElementById("state-list");
const stateText = document.getElementById("state-text");

const langBtn = document.getElementById("lang-btn");
const langList = document.getElementById("lang-list");
const langText = document.getElementById("current-lang");

// 2. Dropdown Toggles
stateBtn.onclick = () => {
    stateList.style.display = (stateList.style.display === "block") ? "none" : "block";
    langList.style.display = "none"; // Close other dropdown
}

langBtn.onclick = () => {
    langList.style.display = (langList.style.display === "block") ? "none" : "block";
    stateList.style.display = "none"; // Close other dropdown
}

// 3. Selection Functions
function selectState(name) {
    stateText.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${name}`;
    stateList.style.display = "none";
}

function selectLang(lang) {
    langText.innerText = lang;
    langList.style.display = "none";
}

// 4. Close dropdowns if clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.state_select') && !event.target.closest('.lang_select')) {
        stateList.style.display = "none";
        langList.style.display = "none";
    }
}