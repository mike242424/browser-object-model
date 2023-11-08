// history object

// a) properties
// 1) length
const historyLengthButton = document.querySelector("#history-length");
historyLengthButton.addEventListener("click", function () {
  console.log("history length:", window.history.length);
});

// b) methods
// 1) forward() - loads the next page
document.addEventListener("DOMContentLoaded", function () {
  const forwardButton = document.querySelector("#forward-button");

  forwardButton.addEventListener("click", function () {
    window.history.forward();
    console.log(historyLength);
  });
});

// 2) back() - loads the previous page
document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector("#back-button");

  backButton.addEventListener("click", function () {
    window.history.back();
    console.log(historyLength);
  });
});

// 3) go() - loads the given page number
document.addEventListener("DOMContentLoaded", function () {
  const goToButton = document.querySelector("#go-to-button");

  goToButton.addEventListener("click", function () {
    window.history.go(2);
    console.log(historyLength);
  });
});
