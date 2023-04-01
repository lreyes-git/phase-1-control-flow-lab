function scuberGreetingForFeet(rideLength){
  // Write your code here!
  if (rideLength <= 400) {
    return "This one is on me!";
  }
  else if (rideLength > 400 && rideLength <= 2000) {
    return "That will be twenty bucks.";
  }
  else if (rideLength > 2000 && rideLength < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do."
  }
}

function ternaryCheckCity(anyGivenCity){
  // Write your code here!
  let response = anyGivenCity === "NYC" ? ("Ok, sounds good.") : ("No go.");
  return response;
}

function switchOnCharmFromTip(theirResponse){
  // Write your code here!
  let myResponse;
  switch (theirResponse) {
    case "generous":
      myResponse = "Thank you so much.";
      break;
    case "not as generous":
      myResponse = "Thank you.";
      break;
    default:
      myResponse = "Bye.";
      break;
  }
  return myResponse;


}