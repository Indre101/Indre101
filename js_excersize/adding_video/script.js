const myVideo = document.getElementById("myVideo");

const play = document.getElementById("start");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");


play.onclick = function () {
  myVideo.play();

}



stop.onclick = function () {

  if (myVideo.currentTime != 0) {
    myVideo.pause()
    myVideo.currentTime = 0;
  }

}

pause.onclick = function () {
  if ((myVideo.paused == true) && (myVideo.currentTime != 0)) {
    myVideo.play();

  } else {
    myVideo.pause();
  }

}