// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");

let clickCount = 0;

menuExpandButton.forEach(e => {
  e.onclick = function() {
    menuExpandButton.forEach(m => {
      m.classList.remove("menu-expand-button-clicked");
    });

    let colorBG = window
      .getComputedStyle(this, null)
      .getPropertyValue("background-color");

    if (colorBG === "#c736c2") {
      console.log("hjk");

      this.onclick = function() {
        this.classList.remove("menu-expand-button-clicked");
      };
    } else {
      this.onclick = function() {
        this.classList.add("menu-expand-button-clicked");
      };
    }
  };
});
