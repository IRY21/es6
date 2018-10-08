"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Hello ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
  console.log("Hello ".concat(name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log("\n        To: ".concat(to, "\n        From: ").concat(from, "\n        Subject: ").concat(subject, "\n        Message: ").concat(message, "\n    "));
}

createEmail('john@mail.com', 'julia@mail.com', 'Hello', 'How are you doing?');

function add(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(parseInt(x) + parseInt(y)));
}

add('5', '7');
var name = 'Bill';
console.log(upperName(_templateObject(), name));

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}