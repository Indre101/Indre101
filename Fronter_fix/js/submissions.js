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
  let subNameArray = ["Video project", "Responsive website", "Photo collage", "Bicycle guide", "Hand in 01", "Mobile firsst"];
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
    addComment(newDiv, newImgDiv)
  }

  submissionsList.appendChild(newDiv);

}



function addComment(divParent, imageStatus) {

  let commentDiv = document.createElement("div");
  let commentH = document.createElement("h4");
  commentH.textContent = "Great work, Kind Regards";
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