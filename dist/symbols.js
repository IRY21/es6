"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* let symbol = Symbol('name');
let symbol2 = Symbol('name');
console.log(symbol);
console.log(symbol2);
console.log(symbol  === symbol2); */

/* let symbol = Symbol.for('name');
let symbol2 = Symbol.for('name');
console.log(symbol === symbol2); */

/* let symbol = Symbol.for();
let name = Symbol.keyFor(symbol);
console.log(symbol);
console.log(name); */

/* let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'adsfs'
}
console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

// let password = user[Symbol.for('password')];
// console.log(password);

console.log(Object.getOwnPropertySymbols(user)); */
var obj = _defineProperty({
  iterator: 0
}, Symbol.iterator, function () {});