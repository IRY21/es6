"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var xmen = ['Cyclops', 'Wolverine', 'Rogue'];
/* console.info('for');
for(let i = 0; i < xmen.length; i++) {
    console.log(xmen[i]);
}

console.info('for...in');
for(let key in xmen) {
    console.log(xmen[key]);
}

console.info('forEach');
xmen.forEach(name => console.log(name)); */

/* console.info('for...of');
for(let name of xmen) {
    console.log(name);
}

// console.log(typeof xmen[Symbol.iterator]);

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

console.log(iterator.length);

let next = iterator.next();

while(!next.done) {
    console.log(next.value);
    next = iterator.next();
} */

/* let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? void 0 : id++;
                let done = !value;
                return { value, done };
            }
        };
    }
};

for(let id of idGenerator) {
    console.log(id);
} */

/* let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count++;
                return { value, done };
            }
        };
    }
};

// for(let random of randomGenerator) {
//     console.log(random);
// }

//let random = randomGenerator[Symbol.iterator]();
let random = randomGenerator.generate();
console.log(random.next().value); */

var ArrayIterator =
/*#__PURE__*/
function () {
  function ArrayIterator(array) {
    _classCallCheck(this, ArrayIterator);

    this.array = array.map(function (item) {
      return item;
    }).sort();
    this.index = 0;
  }

  _createClass(ArrayIterator, [{
    key: "next",
    value: function next() {
      var result = {
        value: undefined,
        done: true
      };

      if (this.index < this.array.length) {
        result.value = this.array[this.index];
        result.done = false;
        this.index++;
      }

      return result;
    }
  }]);

  return ArrayIterator;
}();

var TaskList =
/*#__PURE__*/
function () {
  function TaskList() {
    _classCallCheck(this, TaskList);

    this.tasks = [];
  }

  _createClass(TaskList, [{
    key: "addTasks",
    value: function addTasks() {
      var _this$tasks;

      this.tasks = (_this$tasks = this.tasks).concat.apply(_this$tasks, arguments);
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return new ArrayIterator(this.tasks);
    }
  }]);

  return TaskList;
}();

var taskList = new TaskList();
taskList.addTasks(['Изучить JavaScript', 'Изучить ES6', 'Изучить Vue']);
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = taskList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var task = _step.value;
    console.log(task);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}