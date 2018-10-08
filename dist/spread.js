"use strict";

var staticLanguages = ['C', 'C++', 'Java'];
var dinamicLanguages = ['JavaScript', 'PHP', 'Ruby'];
var languages = staticLanguages.concat(['C#'], dinamicLanguages, ['Python']);
console.log(languages);

function add(x, y, z) {
  console.log(x + y + z);
}

var numbers = [1, 2, 3];
add.apply(void 0, numbers);