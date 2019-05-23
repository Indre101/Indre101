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



  if (colorBG == "rgba(255, 180, 170, 0.5)") {
    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgba(110, 206, 178, 0.3)") {
    document.getElementById("theme2").style.display = "block";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgba(255, 103, 31, 0.3)") {
    document.getElementById("theme3").style.display = "block";

    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme4").style.display = "none";

  } else if (colorBG == "rgba(240, 78, 152, 0.3)") {
    document.getElementById("theme2").style.display = "none";
    document.getElementById("theme3").style.display = "none";
    document.getElementById("theme4").style.display = "block";

  }
}

// date

const datesOf = document.querySelectorAll(".date");

datesOf.forEach((j) => {


  let b = Math.floor((Math.random() * 5) + 1);
  let c = Math.floor((Math.random() * 28) + 1);

  let d = new Date(`${b}- ${c}- 2019`)
  j.innerHTML = d.toLocaleDateString("en-US");

})

// filtering by date

const btn3 = document.getElementById("btn3");

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();


let today1 = today.toLocaleDateString("en-US")



var de = new Date();
de.setDate(de.getDate() - 20);

de2 = de.toLocaleDateString("en-US")


// newwest project

const filterResult = document.getElementById("filterResult");

btn3.onclick = function () {

  for (let h = 0; h < datesOf.length; h++) {

    let dateToCompare = new Date(datesOf[h].innerHTML);
    console.log(dateToCompare);

    if (dateToCompare <= today && dateToCompare > de) {
      console.log("blk")
      filterResult.innerHTML = dateToCompare;
    }


  }


}



let firstDate = document.getElementById("dateInput1");
let second = document.getElementById("dateInput2");
let filterDatebutton = document.getElementById("filterDatebutton");


filterDatebutton.onclick = function () {
  event.preventDefault();
  let dof = new Date(datesOf[0].innerHTML);
  console.log(past1)
  console.log(today1);


  if (+dof >= +today) {
    console.log("pirmas");
  } else if (+dof <= +today) {
    console.log("antras");


  }

  // else if (07 / 07 / 2020 > today) {
  //   console.log("antras");
  //   console.log(datesOf[0].innerHTML)
  //   console.log(today);
  // }

}