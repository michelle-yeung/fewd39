var num1 = prompt("Insert a number");
var num2 = prompt("Insert another number")
if (num1 > num2) {
  alert(num1 + " is bigger");
} else {
  alert(num2 + " is bigger")
};

var num3 = prompt("Insert a number");
var num4 = prompt("Insert another number");
var num5 = prompt("Insert another number");
var max = Math.max(num3, num4, num5);
console.log(max);
alert("The biggest number is " + max);
