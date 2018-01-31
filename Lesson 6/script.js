var a = 42;
var b = 60;

var total = sumValues(a, b);
checkValue(total);

function sumValues(value1, value2){
  return value1 + value2;
}

function checkValue(value){
  if(value > 100 && value < 200){
    console.log("Total value is more than 100 and less than 200");
  }
  else {
    console.log("Total value is less than 100");
  }
}


