for (let i = 100; i >= 0; i--) {


  countDown.value = i;
  if (i % 10 === 0) {
    console.log `This is divided by 10 ${i}`;

  } else {
    console.log(i);
  }
}