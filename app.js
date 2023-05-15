function calc() {
  let dte = new Date();
  let currentYear = dte.getFullYear();
  let userInput = parseInt(document.getElementById("year").value);
  let calculate = currentYear - userInput;
  if (userInput > currentYear) {
    document.getElementById("txt").innerHTML =
      "Your birth year should be less than current year";
    document.getElementById("showAge").innerHTML = "Error!!!";
  } else if (userInput > 150 && userInput < 999) {
    document.getElementById("txt").innerHTML =
      "If you are still alive, keep living";
    document.getElementById("showAge").innerHTML = "Error!!!";
  } else if (userInput <= 150) {
    document.getElementById("txt").innerHTML = "Your Birth year is";
    document.getElementById("showAge").innerHTML = calculate;
  } else if (userInput > 1900 && userInput < currentYear) {
    document.getElementById("txt").innerHTML = "Your age is";
    document.getElementById("showAge").innerHTML = calculate;
  } else {
    document.getElementById("txt").innerHTML = "Error!!!! please try again";
  }
}
