// menu button to rotate

const menuExpandButton = document.querySelectorAll(".buttonExpand");

let clickCount = 0;

menuExpandButton.forEach(e => {
  e.onclick = function() {
    menuExpandButton.forEach(m => {
      m.classList.remove("menu-expand-button-clicked");
    });

    if (clickCount === 0) {
      this.onclick = function() {
        clickCount++;
        this.classList.add("menu-expand-button-clicked");
      };
    } else if (clickCount === 1) {
      clickCount = 0;
      this.classList.remove("menu-expand-button-clicked");
    }
  };
});
