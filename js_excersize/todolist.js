const listItems = document.querySelectorAll("li");

listItems.forEach(crossItems)

let counter = 0;

function crossItems(listItem) {

  listItem.addEventListener("click", crossOut)

}

function crossOut() {
  this.classList.add("crossOut")
  counter++;

  if (counter == 2) {
    this.classList.remove("crossOut");
    counter = 0;
  }


}