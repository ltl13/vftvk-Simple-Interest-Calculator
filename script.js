function compute() {
  var principal = document.getElementById("principal").value;
  if (parseInt(principal) <= 0 || principal == "") {
    alert("Please enter a positive number as the principal");
    document.getElementById("principal").focus();
    return;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);
  var amount = interest;
  document.getElementById("result").innerHTML =
    "If you deposit <span>" +
    principal +
    "</span>,<br>at an interest rate of " +
    rate +
    "%<br>You will receive an amount of <span>" +
    amount +
    "</span>,<br>in the year <span>" +
    year +
    "</span><br>";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
