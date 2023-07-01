// Function to display the current media (image or video)
var currentMediaIndex;
var currentContent = mediaOrder[0];
var mediaContainer;
var navButtonLeft = document.querySelector(".nav-button-left");
var navButtonRight = document.querySelector(".nav-button-right");
// Initilize current condition, and mediaarray
function setCurrentContent(currentCondition) {
  currentMediaIndex = 0;
  var c = conditionOrder[currentCondition];
  currentContent = mediaOrder[c];
  conditionHeader.innerText = conditionNames[c];
  displayCurrentConditionMedia();
}
function displayCurrentConditionMedia() {
  var currentMedia = currentContent[currentMediaIndex];
  mediaContainer = document.getElementById("media");

  // Remove previous media
  if (mediaContainer.firstChild) {
    mediaContainer.firstChild.remove();
  }

  if (currentMedia.includes("mp4")) {
    console.log("Media is video");
    var video = document.createElement("video");
    video.type = "video/mp4";
    video.src = currentMedia;
    video.alt = "Video";
    video.controls = true;
    mediaContainer.appendChild(video);
  } else {
    console.log("Media is image");
    var image = document.createElement("img");
    image.src = currentMedia;
    image.alt = "Image";
    mediaContainer.appendChild(image);
  }
  if (currentMediaIndex == 0) {
    navButtonLeft.style.display = "none";
  } else {
    navButtonLeft.style.display = "flex";
  }
  if (currentMediaIndex == currentContent.length - 1) {
    navButtonRight.style.display = "none";
  } else {
    navButtonRight.style.display = "flex";
  }
}
function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}
// Event listener for arrow keys
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    // Navigate to the next media
    currentMediaIndex = navigate(1, currentMediaIndex, currentContent.length);
    displayCurrentConditionMedia();
  } else if (event.key === "ArrowLeft") {
    // Navigate to the previous media
    currentMediaIndex = navigate(-1, currentMediaIndex, currentContent.length);
    displayCurrentConditionMedia();
  }
});
console.log("currentMIndex", currentMediaIndex);

function navigateContent(direction) {
  console.log("wallah");
  currentMediaIndex = navigate(
    direction,
    currentMediaIndex,
    currentContent.length
  );
  displayCurrentConditionMedia();
}
// Update button visibility
