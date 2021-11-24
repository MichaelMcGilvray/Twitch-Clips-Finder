const url = window.location.href;
var clipURL = url.split("clipURL=").pop();
// console.log(clipURL);


const iframe = document.getElementsByTagName("iframe");
iframe.src = clipURL + "&parent=michaelmcgilvray.github.io";

console.log(iframe.src);