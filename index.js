const url = window.location.href;
var clipURL = url.split("clipURL=").pop();
// console.log(clipURL);


var iframe = document.getElementsByTagName("iframe")[0];
iframe.src = clipURL + "&parent=michaelmcgilvray.github.io";

console.log(iframe.src);