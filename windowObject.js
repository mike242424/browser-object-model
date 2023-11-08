// window object

// a) methods
// 1) alert() - displays the alert box containing message with ok button
const alertButton = document.querySelector("#alert-box");

alertButton.addEventListener("click", displayAlert);

function displayAlert() {
  window.alert("Alert");
}

// 2) confirm() - displays the confirm dialog box containing message with ok and cancel button
const confirmButton = document.querySelector("#confirm-box");
confirmButton.addEventListener("click", displayConfirm);

function displayConfirm() {
  let answer = window.confirm("Are u sure?");
  if (answer == true) {
    console.log("ok");
  } else {
    console.log("cancel");
  }
}

// 3) prompt() - displays a dialog box to get input from the user
const promptButton = document.querySelector("#prompt-box");
promptButton.addEventListener("click", favoriteShowPrompt);

function favoriteShowPrompt() {
  const answer = window.prompt("What is your favorite show");
  console.log("My favorite movie is", answer);
}

// 4) open() - opens a new window
const openWindowButton = document.querySelector("#open-window-box");
openWindowButton.addEventListener("click", openNewWindow);

function openNewWindow() {
  window.open();
}

// 4) close() - closes the current window
const closeWindowButton = document.querySelector("#close-window-box");
closeWindowButton.addEventListener("click", closeCurrentWindow);

function closeCurrentWindow() {
  window.close();
}

// 5) setTimeout() - performs action after specified time like calling function, evaluating expressions etc
const setTimeoutButton = document.querySelector("#set-timeout");
setTimeoutButton.addEventListener("click", setTimeoutFunction);

function setTimeoutFunction() {
  console.log("Set timeout set for 5 seconds");

  window.setTimeout(() => {
    console.log("Set timeout is over");
  }, 5000);
}
