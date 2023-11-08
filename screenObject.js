// screen object

// a) properties
// 1) width - returns the width of the screen
const widthButton = document.querySelector("#width");
widthButton.addEventListener("click", function () {
  console.log(window.screen.width);
});

// 2) height - returns the height of the screen
const heightButton = document.querySelector("#height");
heightButton.addEventListener("click", function () {
  console.log(window.screen.height);
});

// 3) availWidth - returns the available width
const availableWidthButton = document.querySelector("#available-width");
availableWidthButton.addEventListener("click", function () {
  console.log(window.screen.availWidth);
});

// 3) availHeight - returns the available hieght
const availableHeightButton = document.querySelector("#available-height");
availableHeightButton.addEventListener("click", function () {
  console.log(window.screen.availHeight);
});

// 4) colorDepth - returns the color depth
const colorDepthButton = document.querySelector("#color-depth");
colorDepthButton.addEventListener("click", function () {
  console.log(window.screen.colorDepth);
});

// 4) pixelDepth - returns the pixel depth
const pixelDepthButton = document.querySelector("#pixel-depth");
pixelDepthButton.addEventListener("click", function () {
  console.log(window.screen.pixelDepth);
});
