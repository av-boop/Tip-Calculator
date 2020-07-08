function calculate() {
  var a = document.getElementById("amount").value;
  var s = document.getElementById("service").value;
  var p = document.getElementById("persons").value;

  if (a.trim() == "" || s.trim() == "" || p.trim() == "") {
    alert("Please enter all values");
    return false;
  }

  var total = (a * s) / p;
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}


