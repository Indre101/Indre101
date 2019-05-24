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
    this.removeChild(themeDes);


  }


  // if ()


}
const datesOf = document.querySelectorAll(".date");




submission.onclick = function () {
  link2.style.display = "";



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
de.setDate(de.getDate() - 21);



// newwest project

const filterResult = document.getElementById("filterResult");

btn3.onclick = function () {


  let currentProjectDateArray = [];
  let currentProjectDateArrayID = [];


  datesOf.forEach((l) => {
    currentProjectDateArray.push(l.innerHTML);
    currentProjectDateArrayID.push(l.id);
  })

  let sortedDate = currentProjectDateArray.sort();

  let latestDate = sortedDate[sortedDate.length - 1];


  currentProjectDateArrayID.forEach((g) => {

    if (document.getElementById(g).innerHTML == latestDate) {

      let x = document.getElementById(g).parentElement
      x.style.backgroundColor = "rgba(253,215,87,0.3)"
      filterResult.appendChild(x);



    }
  })

}



let smallerDate = document.getElementById("dateInput1");
let largerDate = document.getElementById("dateInput2");
let filterDatebutton = document.getElementById("filterDatebutton");


filterDatebutton.onclick = function () {
  event.preventDefault();
  let smallerDate_2 = new Date(smallerDate.value)
  let largerDate_2 = new Date(largerDate.value)

  let datesOf_2 = []

  datesOf.forEach((z) => {
    let z_1 = new Date(z.innerHTML);
    datesOf_2.push(z_1);
  })

  console.log(datesOf_2[10]);

  if (datesOf_2[10] >= smallerDate_2) {
    console.log("yes true")
  }


  let datesOf_3 = datesOf_2.filter((z_3) => {


    return z_3 >= smallerDate_2 && z_3 <= largerDate_2

  });

  console.log(datesOf_3);




}