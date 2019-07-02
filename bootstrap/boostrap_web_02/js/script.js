const menuBtn = document.getElementById("menuBtn");
const searchBtn = document.getElementById("searchBtn");

function displayNone(e) {

  // e.style.display = "none";
  e.style.classList.toggle("d-block");


  console.log("kl")
}

menuBtn.onclick = () => displayNone(document.getElementById("navbarSupportedContent_2"))
searchBtn.onclick = () => displayNone(document.getElementById("navbarSupportedContent"))