const btn1 = document.getElementById("btn1");
const pass = document.getElementById("pass")
const message1 = document.getElementById("message1");
const formLogin = document.getElementById("formLogin");




btn1.onclick = function () {

  checkPassword()
}

function checkPassword() {

  if (pass.value.length > 7) {
    message1.style.display = "none";
    event.preventDefault();

    window.location.href = "../html/schedule.html";


  } else if (pass.value.length < 7) {
    pass.value = ""
    message1.style.padding = "1em 0";
    message1.textContent = "Must be at least 7 characters long"
    event.preventDefault();
  }

}