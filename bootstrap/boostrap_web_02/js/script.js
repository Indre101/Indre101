// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");


menuExpandButton.forEach((e) => {

  e.onclick = function () {


    if (clickedmenuExpandButton === 1) {

      menuExpandButton.forEach((m) => {
        m.classList.remove("menu-expand-button-clicked");

      })

      this.classList.toggle("menu-expand-button-clicked");
    }


  }



})