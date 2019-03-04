let menuelement = document.getElementsByClassName("menuelement");
let menu = document.getElementById("burger");


let myarray = [];





menu.onclick = function () {


  console.log(myarray);
  console.log(menuelement);

  setInterval(function () {
    let a = 8;
    do {

      for (i in menuelement) {
        a--
        menuelement[i].style.display = "block"
      }
    } while (a === 7);
  }, 2000)



  // for (i in menuelement) {
  //   menuelement[i].style.display = "block";
  // }


  // setTimeout(function () {
  //   for (i in menuelement) {
  //     menuelement[i].style.display = "block";
  //   }
  // }, 5)


  // for (let i = 0; i < menuelement.length; i++) {

  //   setTimeout(function () {
  //     menuelement[i].style.display = "block";
  //   }, 5);

  // }

  //   menuelement[i].style.display = setTimeout(function () {
  //     menuelement[i].style.display = "block";
  //   }, 2);

  // }
  // }
}



menu.onmouseover = function () {
  menu.style.backgroundColor = 'red';
  menu.style.cursor = 'pointer';

}