"use strict";

/* let [js, php, py, rb] = ['JS', 'PHP', 'Puthon', 'Ruby'];

console.log(js, php, py, rb);


let scores = [3, 4, [5, 6]];
let [low, mid, [high, higher]] = scores;

console.log(low, mid, high, higher);
 */

/* function computedScore([low, mid]) {
    console.log(low, mid);
}

computedScore([3, 4]);


function getScores() {
    return [3, 4, 5];
}

let scores = getScores();
console.log(scores);

let [low, mid, high] = getScores();
console.log(low, mid, high);


let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];

console.log(`Yes is ${yes}`);
console.log(`No is ${no}`);
console.log(`o_O`); */
/--------Start---distructuringObject--------------------/;
var user = {
  firstname: 'John',
  lastname: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe'
  }
};
/* let {firstname: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};
console.log(first, last, age); */

var first = user.firstname,
    last = user.lastname,
    fb = user.social.facebook,
    _user$age = user.age,
    age = _user$age === void 0 ? 25 : _user$age;
console.log(first, last, fb, age);

function post(url, _ref) {
  var _ref$data = _ref.data,
      firstname = _ref$data.firstname,
      lastname = _ref$data.lastname,
      cache = _ref.cache;
  console.log(firstname, lastname, cache);
}

var result = post('api/user', {
  data: user,
  cache: false
});

function getUserInfo() {
  return {
    firstname: 'John',
    lastname: 'Doe',
    social: {
      facebook: 'johndoe',
      twitter: 'jdoe'
    }
  };
}

var _getUserInfo = getUserInfo(),
    firstname = _getUserInfo.firstname,
    lastnamem = _getUserInfo.lastnamem,
    twitter = _getUserInfo.social.twitter;

console.log(firstname, lastnamem, twitter);