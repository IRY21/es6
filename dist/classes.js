"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Task =
/*#__PURE__*/
function () {
  function Task() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Task.getDefaultTitle();

    _classCallCheck(this, Task);

    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('Создание задачи');
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.done = true;
      console.log("\u0417\u0430\u0434\u0430\u0447\u0430 ".concat(this.title, " \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0430"));
    }
  }, {
    key: "done",
    get: function get() {
      return this._done ? 'Выполнена' : 'Не выполнена';
    },
    set: function set(val) {
      if (val !== undefined && typeof val === 'boolean') {
        this._done = val;
      } else {
        console.error('Ошибка! Укажите значение true или false');
      }
    }
  }], [{
    key: "getDefaultTitle",
    value: function getDefaultTitle() {
      return 'Задача';
    }
  }]);

  return Task;
}();

Task.count = 0;
var task = new Task('Убрать комнату');
/* let task2 = new Task('Купить продукты');
let task3 = new Task();

console.log(task.title);
console.log(task2.title);
console.log(task3.title);

console.log(Task.count);

task2.complete();

task.getDefaultTitle(); */

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);