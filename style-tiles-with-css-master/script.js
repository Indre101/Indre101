const btnExpandArr = document.querySelectorAll(".arrowBtn");
const convertPrototype = Array.prototype.slice.call(btnExpandArr);
const expandableContentArr = document.querySelectorAll(".expandableContent");

console.log(btnExpandArr)

btnExpandArr.forEach(btn => btn.addEventListener("mouseover", expandContent));


function expandContent() {

  btnExpandArr.forEach(btn => btn.classList.remove("rotate"));

  this.classList.toggle("rotate");

  expandableContentArr.forEach(e => {
    e.classList.add("d-none");

  })

  expandableContentArr[convertPrototype.indexOf(this)].classList.remove("d-none");
  expandableContentArr[convertPrototype.indexOf(this)].classList.add("expandableContentAnimation");



}