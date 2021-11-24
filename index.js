const url = window.location.href;
var clipURL = url.split("clipURL=").pop();


var iframe = document.getElementsByTagName("iframe")[0];
iframe.src = clipURL + "&parent=michaelmcgilvray.github.io";