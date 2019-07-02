const menuBtn = document.getElementById("menuBtn");
const searchBtn = document.getElementById("searchBtn");

function displayNone(e) {

  e.style.display = "none";

  console.log("kl")
}

menuBtn.onclick = () => displayNone(document.getElementById("navbarSupportedContent"))
searchBtn.onclick = () => displayNone(document.getElementById("navbarSupportedContent_2"))