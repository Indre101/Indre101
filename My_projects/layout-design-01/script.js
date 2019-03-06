let menuelement = document.getElementsByClassName("menuelement");
let menu = document.getElementById("burger");


let myarray = [];


// menu.onclick = function () {

//   function showAll() {

//     let j = menuelement.length;

//     do {
//       j--;

//       setTimeout((menuelement[j].style.display = "block"), 3000)

//     } while (j >= 1);

//   }

//   showAll()

// }


menu.onclick = function () {


  i = menuelement.length;


  setTimeout(() => {

    do {

      i--;
      console.log(i)

    } while (i >= 0);

  }, 2000);

  for (let i in menuelement) {
    menuelement[div[i--]].style.display = "block"

  }

}


menu.onmouseover = function () {
  menu.style.backgroundColor = 'red';
  menu.style.cursor = 'pointer';

}