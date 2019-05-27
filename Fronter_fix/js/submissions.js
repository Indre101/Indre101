let submissionsList = document.getElementById("submissionsList");
const filterButton_2 = document.getElementById("filterButton_2");


let status1 = new Image();
status1.src = "../icons/anX.png"

let status2 = new Image();
status2.src = "../icons/Check.png"

let status3 = new Image();
status3.src = "../icons/threeDots.png";

let statusArray = [status1.src, status2.src, status3.src];

function setStatus() {
  let a_1 = Math.floor(Math.random() * 3);
  return a_1
}

function setDate() {
  let b = Math.floor((Math.random() * 5) + 1);
  let c = Math.floor((Math.random() * 28) + 1);

  let d = new Date(`${b}- ${c}- 2019`)
  let d1 = d.toLocaleDateString("en-US");
  return d1;

}




function setName() {
  let subNameArray = ["Video_project.pdf", "Responsive_website.pdf", "Photo_collage.pdf", "Bicycle_guide.pdf", "Hand_in_01.pdf", "Mobile_first.pdf"];
  let e = Math.floor(Math.random() * (subNameArray.length));
  return subNameArray[e];
}




for (let index = 0; index < 12; index++) {

  let newDiv = document.createElement("div");
  let newH = document.createElement("h4");
  let newH_2 = document.createElement("h4");
  let newImgDiv = document.createElement("div");


  newImgDiv.style.backgroundImage = "url('" + statusArray[setStatus()] + "')";

  newImgDiv.classList.add("statusImage")

  newH_2.textContent = setName();
  newH.textContent = setDate();
  newH.classList.add("dateClass");


  newDiv.appendChild(newImgDiv);
  newDiv.appendChild(newH_2)
  newDiv.appendChild(newH)


  newDiv.classList.add("theDiv");

  newDiv.onclick = function () {

    // let img_source = window.getComputedStyle(newImgDiv, null).getPropertyValue("background-image")


    // console.log(status3.src)
    // console.log(newImgDiv.style.getPropertyValue("background-image"));

    console.log(window.getComputedStyle(newImgDiv, true).getPropertyValue('background-image'));

    // console.log("url('" + status3.src + "')")

    if (window.getComputedStyle(newImgDiv).getPropertyValue('background-image') === "url('" + status3.src + "')") {

      newDiv.style.pointerEvents = "none";
      console.log("true")
    } else if (window.getComputedStyle(newImgDiv).getPropertyValue('background-image') != "url('" + status3.src + "')") {
      addComment(newDiv, newImgDiv)
      console.log("pridetas img")

    }
  }

  submissionsList.appendChild(newDiv);

}



function addComment(divParent, imageStatus) {

  let commentDiv = document.createElement("div");
  let commentH = document.createElement("h4");
  let breakLine = document.createElement("br");


  commentH.textContent = "Great work";
  commentDiv.appendChild(breakLine);




  commentDiv.appendChild(commentH);
  imageStatus.style.display = "none";
  commentDiv.style.display = "block";
  divParent.insertAdjacentElement("afterbegin", commentDiv);
  divParent.onclick = function () {

    commentDiv.style.display = "none";
    imageStatus.style.display = "block";



  }





}


const dateClass = document.querySelectorAll(".dateClass");

let dateClass_1 = [];


filterButton_2.onclick = function name() {

  for (let index = 0; index < dateClass.length; index++) {


    dateClass_1.push(dateClass[index].innerHTML);
    let dateClass_2 = dateClass_1.sort();

    console.log(dateClass_2)



  }


}