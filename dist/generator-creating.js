"use strict";

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(generateArray),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(generator);

/* function* generator() {

} */

/* let generator = function* () {

} */

/* let obj = {
    *generator() {}
}; */

/* class SomeClass {
    *generator() {}
} */
function generateArray() {
  return regeneratorRuntime.wrap(function generateArray$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.delegateYield([1, 2, 3], "t0", 1);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function generator() {
  return regeneratorRuntime.wrap(function generator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return 1;

        case 3:
          _context2.next = 5;
          return 2;

        case 5:
          _context2.next = 7;
          return 3;

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this, [[0, 9]]);
}

var iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());