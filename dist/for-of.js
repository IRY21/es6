"use strict";

var browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Opera'];

for (var browser in browsers) {
  console.log(browser);
}

for (var index in browsers) {
  console.log(browsers[index]);
}

for (var _i = 0; _i < browsers.length; _i++) {
  var _browser = browsers[_i];
  console.log(_browser);
}

console.log(browsers);