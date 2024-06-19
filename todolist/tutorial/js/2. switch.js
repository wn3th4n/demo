var date = 2;

switch (date) {
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  case 8:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid date");
    break;
}

function run(fruits) {
  var result;

  switch (fruits) {
    case "Banana":
      result = "This is a Banana";
      break;
    case "Apple":
      result = "This is an Apple";
      break;
    default:
      result = "No fruits";
      break;
  }

  return result;
}

console.log(run("Banana"));
