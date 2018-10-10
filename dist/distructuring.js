"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* let [js, php, py, rb] = ['JS', 'PHP', 'Puthon', 'Ruby'];

console.log(js, php, py, rb);


let scores = [3, 4, [5, 6]];
let [low, mid, [high, higher]] = scores;

console.log(low, mid, high, higher);
 */
function computedScore(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      low = _ref2[0],
      mid = _ref2[1];

  console.log(low, mid);
}

computedScore([3, 4]);

function getScores() {
  return [3, 4, 5];
}

var scores = getScores();
console.log(scores);

var _getScores = getScores(),
    _getScores2 = _slicedToArray(_getScores, 3),
    low = _getScores2[0],
    mid = _getScores2[1],
    high = _getScores2[2];

console.log(low, mid, high);
var yes = 'Yes';
var no = 'No';
var _ref3 = [no, yes];
yes = _ref3[0];
no = _ref3[1];
console.log("Yes is ".concat(yes));
console.log("No is ".concat(no));
console.log("o_O");