var time = prompt("What was your best marathon time?");

/*if (time <= 4){
  alert("Your time was excellent!");
} else if (time > 4 && time <= 5){
  alert("Your time was average");
} else (time>6){
  alert("You should speed up!");
}*/

if (time>4 && time <=5) {
  alert("Time was average");
} else if (time > 2 && time <=4) {
  alert("Time was excellent");
} else if (time > 5) {
  alert("Speed up!");
} else {
  alert("Please enter a correct time");
}
