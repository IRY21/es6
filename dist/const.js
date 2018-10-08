"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var MATH = {
  PI: 3.14159
};
MATH = (_readOnlyError("MATH"), {
  PI: 3
});
console.log(MATH.PI);