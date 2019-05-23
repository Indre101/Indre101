// modules
// modules




const themes = document.querySelectorAll(".themeBlock");
const themeDes = document.getElementById("themeDes");
const submission = document.getElementById("submission");
const forma = document.getElementById("submission1");
const link2 = document.getElementById("linkas2");
const teaching = document.getElementById("teaching");
const link1 = document.getElementById("linkas1");
const themeName = document.querySelectorAll(".themeName");

const modules = document.querySelectorAll(".module");
const themesColor = document.querySelectorAll(".theme")

themeName.forEach((project) => {
  project.addEventListener("click", addFolders)
})




function addFolders() {

  if (themeDes.style.display === "") {
    this.appendChild(themeDes);

    themeDes.classList.remove("themeDes")


  } else if (themeDes.style.display != "") {

    themeDes.classList.toggle("themeDes");
    // this.removeChild(themeDes);


  }


  // if ()


}




submission.onclick = function () {
  // link2.style.display = "";
  forma.appendChild(link2)
  link2.classList.toggle("linkas1");



}

teaching.onclick = function () {

  teaching.appendChild(link1)
  link1.classList.toggle("linkas1")

}

// filtering 

modules.forEach((f) => {
  f.addEventListener("click", filterByTheme)

})

function filterByTheme() {
  let colorBG = window.getComputedStyle(this, null).getPropertyValue('background-color');
  console.log(colorBG)



  if (colorBG == "rgb(89, 203, 232)") {
    console.log("themesmm")
    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgb(110, 206, 178)") {
    console.log("themesmm")
    document.getElementById("theme2").style.display = "block";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgb(7, 98, 200)") {
    console.log("themesmm")
    document.getElementById("theme3").style.display = "block";

    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgb(86, 194, 113)") {
    console.log("themesmm")
    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "block";

  }
}