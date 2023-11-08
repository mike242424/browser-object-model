// navigator object

// a) properties
// 1) appName - returns the name
const appNameButton = document.querySelector("#app-name");
appNameButton.addEventListener("click", function () {
  console.log("appName:", window.navigator.appName);
});

// 2) appVersion - returns the version
const appVersionButton = document.querySelector("#app-version");
appVersionButton.addEventListener("click", function () {
  console.log("appVersion:", window.navigator.appVersion);
});

// 3) appCodeName - returns the code name
const appCodeNameButton = document.querySelector("#app-code-name");
appCodeNameButton.addEventListener("click", function () {
  console.log("appCodeName:", window.navigator.appCodeName);
});

// 4) cookieEnabled - returns true if cookie is enabled otherwise false
const cookieEnabledButton = document.querySelector("#cookie-enabled");
cookieEnabledButton.addEventListener("click", function () {
  console.log("cookieEnabled:", window.navigator.cookieEnabled);
});

// 5) userAgent - returns the user agent
const userAgentButton = document.querySelector("#user-agent");
userAgentButton.addEventListener("click", function () {
  console.log("userAgent:", window.navigator.userAgent);
});

// 6) language - returns the language. It is supported in Netscape and Firefox only.
const languageButton = document.querySelector("#language");
languageButton.addEventListener("click", function () {
  console.log("language:", window.navigator.language);
});

// 7) userLanguage - returns the user language. It is supported in IE only.

// 8) plugins - 	returns the plugins. It is supported in Netscape and Firefox only.
const pluginsButton = document.querySelector("#plugins");
pluginsButton.addEventListener("click", function () {
  console.log("plugins:", window.navigator.plugins);
});

// 9) systemLanguage - returns the system language. It is supported in IE only.

// 10) mimeTypes[] - returns the array of mime type. It is supported in Netscape and Firefox only.
const mimeTypesButton = document.querySelector("#mime-types");
mimeTypesButton.addEventListener("click", function () {
  console.log("mimeTypes:", window.navigator.mimeTypes);
});

// 11) platform - returns the platform e.g. Win32.
const platformButton = document.querySelector("#platform");
platformButton.addEventListener("click", function () {
  console.log("platform:", window.navigator.platform);
});

// 12) online - returns true if browser is online otherwise false
const onLineButton = document.querySelector("#on-line");
onLineButton.addEventListener("click", function () {
  console.log("onLine:", window.navigator.onLine);
});

// b) methods
// 1) javaEnabled() - checks if java is enabled
const javaEnabledButton = document.querySelector("#java-enabled");
javaEnabledButton.addEventListener("click", function () {
  if (window.navigator.javaEnabled()) {
    console.log("Java is enabled in your browser.");
  } else {
    console.log("Java is not enabled in your browser.");
  }
});
