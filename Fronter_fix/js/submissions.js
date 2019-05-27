let submissionsList = document.getElementById("submissionsList");



let status1 = new Image();
status1.src = "../icons/anX.png"
status1.classList.add("statusImage")

let status2 = new Image();
status2.src = "../icons/Check.png"
status2.classList.add("statusImage")

let status3 = new Image();
status3.src = "../icons/threeDots.png";
status3.classList.add("statusImage")


function setStatus() {
  let a_1 = Math.floor(Math.random() * 3);
  let statusArray = [status1, status2, status3];
  return statusArray[a_1];
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


// let Submission = {
//   name: function () {
//     this.name = subNameArray[e];
//     return this.name

//   },
//   date: d1,
//   status: statusArray[a_1]

// }

// function name(params) {

// }



// var animal1 = Object.create(Submission);

for (let index = 0; index < 12; index++) {


  let newDiv = document.createElement("div");
  let newH = document.createElement("h4");
  let newH_2 = document.createElement("h4");

  newH_2.textContent = setName();
  newH.textContent = setDate();


  newDiv.appendChild(newH_2)
  newDiv.appendChild(setStatus())
  newDiv.appendChild(newH)


  newDiv.classList.add("theDiv");


  appendChild(newDiv);


}

function appendChild(element) {
  submissionsList.appendChild(element);


}