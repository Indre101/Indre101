const btn1 = document.getElementById("btn1");
const psw = document.getElementById("psw")
const message1 = document.getElementById("message1");




btn1.onclick = function () {

  checkPassword()
}

function checkPassword() {

  if (psw.value.length > 7) {
    message1.style.display = "none";
    event.preventDefault();

    window.location.href = "../html/schedule.html";


  } else if (pass.value.length < 7) {
    psw.value = ""
    message1.style.padding = "1em 0";
    message1.textContent = "Must be at least 7 characters long"
    event.preventDefault();
  }

}