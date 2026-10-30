console.log("hello world");

function applyTheme() {
  var path = window.location.pathname;
  var fgColor, fgLight, fgDark;

  var bannerImg = "url('../img/banner.png')";
  var bannerPos = "center center";

  // Change based on page
  if (path.match(/about/)) {
    // Blue grey
    fgColor = "#546d78";
    fgLight = "#607c8a";
    fgDark = "#455a63";
  } else if (path.match(/travels/)) { // matches /travel/ and /travels/
    // Green
    fgColor = "#4cae4f";
    fgLight = "#68bb6c";
    fgDark = "#398e3d";
    // Override banner for travel
    bannerImg = "url('../img/banner-travel.jpg')";
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

  // Setting the variables
  var r = document.querySelector(":root");
  var bgColor = "#fff";
  var bgLight = "#ffffffb3";

  // Apply colors
  r.style.setProperty("--md-primary-fg-color", fgColor);
  r.style.setProperty("--md-primary-fg-color--light", fgLight);
  r.style.setProperty("--md-primary-fg-color--dark", fgDark);
  r.style.setProperty("--md-primary-bg-color", bgColor);
  r.style.setProperty("--md-primary-bg-color--light", bgLight);

  // Apply the banner image
  r.style.setProperty("--md-banner-image", bannerImg);
  r.style.setProperty("--md-banner-position", bannerPos);
}

// 1. Run on initial page load
applyTheme();

// 2. Run on instant navigation (MkDocs Material)
if (typeof document$ !== "undefined") {
  document$.subscribe(function() {
    console.log("Navigation triggered. Current Path:", window.location.pathname);
    applyTheme();
  });
}
