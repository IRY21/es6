"use strict";

var btns = document.querySelectorAll('button');

var _loop = function _loop(i) {
  btn = btns[i];
  btn.innerText = i;

  btn.onclick = function () {
    console.log(i);
  };
};

for (var i = 0; i < btns.length; i++) {
  var btn;

  _loop(i);
}