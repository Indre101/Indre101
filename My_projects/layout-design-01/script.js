let menuelement = document.getElementsByClassName("menuelement");
let menu = document.getElementById("burger");


menuelement.entries()

function displayAll() {
  console.log(typeof (menuelement))
  menuelement.forEach((element) => {
    element.style.display = 'block';

  });
}


menu.onclick = function () {
  displayAll();
  console.log('object', menuelement);
}

menu.onmouseover = function () {
  menu.style.backgroundColor = 'red';
  menu.style.cursor = 'pointer';

}