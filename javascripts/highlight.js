console.log("hello world");

console.log(window.location.pathname);
var path = window.location.pathname;
// Change based on page
if (path.match(/about/)) {
  // Blue grey
  var fgColor = "#546d78";
  var fgLight = "#607c8a";
  var fgDark = "#455a63";
} else if (path.match(/travels/)) {
  // Green
  var fgColor = "#4cae4f";
  var fgLight = "#68bb6c";
  var fgDark = "#398e3d";
} else if (path.match(/tech/)) {
  // Deep purple
  var fgColor = "#7e56c2";
  var fgLight = "#9574cd";
  var fgDark = "#673ab6";
} else if (path.match(/stationary/)) {
  // Brown
  var fgColor = "#795649";
  var fgLight = "#8d6e62";
  var fgDark = "#5d4037";
} else if (
  path.match(/index/) ||
  path.match(/ignore\.html/) ||
  path == "/" ||
  path == "/Project-Norn/" ||
  path == "/tags.html"
) {
  // Indigo
  console.log("indigo");
  var fgColor = "#4051b5";
  var fgLight = "#5d6cc0";
  var fgDark = "#303fa1";
} else {
  var fgColor = "hsla(var(--md-hue),15%,9%,1)";
  var fgLight = "hsla(var(--md-hue),15%,9%,0.54)";
  var fgDark = "hsla(var(--md-hue),15%,9%,1)";
}
// Setting the colors
var r = document.querySelector(":root");
// Constant colors
var bgColor = "#fff";
var bgLight = "#ffffffb3";
r.style.setProperty("--md-primary-fg-color", fgColor);
r.style.setProperty("--md-primary-fg-color--light", fgLight);
r.style.setProperty("--md-primary-fg-color--dark", fgDark);
r.style.setProperty("--md-primary-bg-color", bgColor);
r.style.setProperty("--md-primary-bg-color--light", bgLight);

// So it also works on navigation.instant
document$.subscribe(function() {
  console.log("Navigation triggered. Current Path:", window.location.pathname);
  
  var path = window.location.pathname;
  var fgColor, fgLight, fgDark;

  // Change based on page
  if (path.match(/about/)) {
    // Blue grey
    fgColor = "#546d78";
    fgLight = "#607c8a";
    fgDark = "#455a63";
  } else if (path.match(/travels/)) {
    // Green
    fgColor = "#4cae4f";
    fgLight = "#68bb6c";
    fgDark = "#398e3d";
  } else if (path.match(/tech/)) {
    // Deep purple
    fgColor = "#7e56c2";
    fgLight = "#9574cd";
    fgDark = "#673ab6";
  } else if (path.match(/stationary/)) {
    // Brown
    fgColor = "#795649";
    fgLight = "#8d6e62";
    fgDark = "#5d4037";
  } else if (
    path.match(/index/) ||
    path.match(/ignore\.html/) ||
    path === "/" ||
    path === "/Project-Norn/" ||
    path === "/tags.html"
  ) {
    // Indigo
    console.log("indigo");
    fgColor = "#4051b5";
    fgLight = "#5d6cc0";
    fgDark = "#303fa1";
  } else {
    // Default fallback
    fgColor = "hsla(var(--md-hue),15%,9%,1)";
    fgLight = "hsla(var(--md-hue),15%,9%,0.54)";
    fgDark = "hsla(var(--md-hue),15%,9%,1)";
  }

  // Setting the colors
  var r = document.querySelector(":root");
  
  // Constant colors (can define these outside the loop if you want, but inside is safer)
  var bgColor = "#fff";
  var bgLight = "#ffffffb3";

  r.style.setProperty("--md-primary-fg-color", fgColor);
  r.style.setProperty("--md-primary-fg-color--light", fgLight);
  r.style.setProperty("--md-primary-fg-color--dark", fgDark);
  r.style.setProperty("--md-primary-bg-color", bgColor);
  r.style.setProperty("--md-primary-bg-color--light", bgLight);
});
