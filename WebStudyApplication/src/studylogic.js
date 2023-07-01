// Array with the order of images
var currentConditionIndex = 0;
var conditionHeader = document.getElementById("condition");
// Event listener for arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    // Navigate to the next image
    navigateCondition(1);
  } else if (event.key === "a") {
    // Navigate to the previous image
    navigateCondition(-1);
  }
});
function navigate(direction, index, arrayLength) {
  var i = index + direction;
  console.log(i, arrayLength);
  if (i == arrayLength) {
    return index;
  }
  if (i < 0) {
    return index;
  }
  return i;
  // return (index + direction + arrayLength) % arrayLength;
}
function navigateCondition(direction) {
  currentConditionIndex = navigate(
    direction,
    currentConditionIndex,
    conditionOrder.length
  );
  setCurrentContent(currentConditionIndex);
}
// Initial display of Condition 0, used as intro slideF
setCurrentContent(currentConditionIndex);
