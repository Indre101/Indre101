let submissionsList = document.getElementById("submissionsList");
const filterButton_2 = document.getElementById("filterButton_2");

// 







let status1 = new Image();
status1.src = "../icons/anX.png"

let status2 = new Image();
status2.src = "../icons/Check.png"

let status3 = new Image();
status3.src = "../icons/threeDots.png";

let statusArray = [status1.src, status2.src, status3.src];

function setStatus() {
  let a_1 = Math.floor(Math.random() * 3);
  return statusArray[a_1]
}

function setDate() {



  let b = Math.floor((Math.random() * 5) + 1);
  let c = Math.floor((Math.random() * 28) + 1);

  let d = new Date(`${b}- ${c}- 2019`)
  let d1 = d.toLocaleDateString("eu-EU");


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

  let imageContainer = document.createElement("div");
  let newImgDiv = document.createElement("img");


  newImgDiv.src = setStatus();


  newImgDiv.classList.add("statusImage")

  // newImgDiv.src = statusArray[setStatus()];


  imageContainer.appendChild(newImgDiv);


  newH_2.textContent = setName();
  newH.textContent = setDate();
  newH.classList.add("dateClass");


  newDiv.appendChild(imageContainer);
  newDiv.appendChild(newH_2)
  newDiv.appendChild(newH)


  newDiv.classList.add("theDiv");

  newDiv.onclick = function () {


    let commentH = document.createElement("h4");




    if (newImgDiv.src === status3.src) {

      newDiv.style.pointerEvents = "none";


    } else if (newImgDiv.src === status1.src) {

      commentH.textContent = "Work on it";

      newImgDiv.style.display = "none";

      imageContainer.insertAdjacentElement("afterbegin", commentH);


      newDiv.onclick = function () {
        newImgDiv.style.display = "block";
        commentH.style.display = "none";
      }

    } else if (newImgDiv.src === status2.src) {

      commentH.textContent = "Great work";

      newImgDiv.style.display = "none";

      imageContainer.insertAdjacentElement("afterbegin", commentH);


      newDiv.onclick = function () {
        newImgDiv.style.display = "block";
        commentH.style.display = "none";
      }

    }



  }


  submissionsList.appendChild(newDiv);

}






const dateClass = document.querySelectorAll(".dateClass");



// const date_sort_asc = function (date1, date2) {
//   // This is a comparison function that will result in dates being sorted in
//   // ASCENDING order. As you can see, JavaScript's native comparison operators
//   // can be used to compare dates. This was news to me.
//   if (date1 > date2) return 1;
//   if (date1 < date2) return -1;
//   return 0;
// };



// filterButton_2.onclick = function name() {

//   let dateClass_1 = [];


//   dateClass.forEach((n) => {
//     dateClass_1.push(n.innerHTML);


//   })

//   dateClass_1.sort(date_sort_asc)

//   // document.write('<p>Dates sorted in descending order (newest to oldest):</p>');
//   for (var i = 0; i < dateClass_1.length; i++) {
//     // document.write(i + ': ' + dateClass_1[i] + '<br>');
//     console.log((dateClass_1[i]))

//     // submissionsList.insertAdjacentElement("afterbegin", dateClass_1[i].parentElement);

//   }

//   // let dateClass_2 = dateClass_1.sort();






// }