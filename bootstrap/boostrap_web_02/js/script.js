// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");


menuExpandButton.forEach((e) => {

  e.onclick = function () {



    menuExpandButton.forEach((m) => {
      m.classList.remove("menu-expand-button-clicked");

    })

    this.classList.add("menu-expand-button-clicked");


  }



})