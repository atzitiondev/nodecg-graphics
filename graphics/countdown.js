const dateReplicant = nodecg.Replicant("countdownDate");
const labelReplicant = nodecg.Replicant("countdownLabel");
var countDownDate;

dateReplicant.on("change", (value) => {
  countDownDate = value;
  //console.log(countDownDate);
});
labelReplicant.on("change", (value) => {
  document.getElementById("label").innerHTML = value;
});
function toPositive(pNumber) {
  if (pNumber < 0) {
    return Number(pNumber.toString().substring(1));
  } else {
    return pNumber;
  }
}
function addZero(pNumber) {
  var number = toPositive(pNumber);
  if (number.toString().length == 1) {
    number = "0" + number;
  }
  return number;
}

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  //console.log(distance);
  var countdownFullString = "";
  // Time calculations for days, hours, minutes and seconds
  var days = toPositive(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = toPositive(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  var minutes = toPositive(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  var seconds = toPositive(Math.floor((distance % (1000 * 60)) / 1000));
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  var sign;
  if (distance >= 0) {
    sign = "-";
  } else {
    sign = "+";
  }

  countdownFullString = countdownFullString.concat(sign);
  if (days != 0) {
    countdownFullString = countdownFullString.concat(toPositive(days));
    countdownFullString = countdownFullString.concat("D ");
  }
  if (days != 0 && hours != 0) {
    countdownFullString = countdownFullString.concat(addZero(hours));
    countdownFullString = countdownFullString.concat(":");
  }
  countdownFullString = countdownFullString.concat(addZero(minutes));
  countdownFullString = countdownFullString.concat(":");
  countdownFullString = countdownFullString.concat(addZero(seconds));

  document.getElementById("countdownFull").innerHTML = countdownFullString;
}, 1000);
