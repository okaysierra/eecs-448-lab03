function colors() {
  var borderRed = document.getElementById("borderRed").value;
  var borderGreen = document.getElementById("borderGreen").value;
  var borderBlue = document.getElementById("borderBlue").value;

  var borderWidth = document.getElementById("width").value;

  var bgRed = document.getElementById("bgRed").value;
  var bgGreen = document.getElementById("bgGreen").value;
  var bgBlue = document.getElementById("bgBlue").value;

  var borderColor = "#"+borderRed+borderGreen+borderBlue;
  var bgColor = "#"+bgRed+bgGreen+bgBlue;


  document.getElementById("dummytext").style.borderColor = borderColor;
  document.getElementById("dummytext").style.borderWidth = borderWidth;
  document.getElementById("dummytext").style.backgroundColor = bgColor;

}
