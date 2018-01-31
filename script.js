console.log("42" == 42);
console.log("42" === 42);

var x = "banana" + 42 + 3.14;
console.log(x);

var y = "banana" + 42 * 2;
console.log(y);

var x = "3.14";
console.log(parseFloat(x));
console.log(parseInt(x));
console.log(+x);

if(42 === "42") {
  console.log('equal and same type');
}
else if(42 == "42") {
  console.log('equal but not same type');
}
else {
  console.log('not equal');
}