// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");

let clickCount = 0;

menuExpandButton.forEach(e => {
  e.onclick = function () {
    menuExpandButton.forEach(m => {
      m.classList.remove("menu-expand-button-clicked");
    });

    let colorBG = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");

    this.classList.add("menu-expand-button-clicked");

    if (colorBG === "rgb(239, 137, 235)") {
      this.classList.remove("menu-expand-button-clicked");
    }
  };
});