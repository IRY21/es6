class Task {
    constructor(title = getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count += 1;
        console.log('Создание задачи');
    }

    get title() {
        return this._title;
    }

    set title(val) {
        this._title = val;
    }

    static getDefaultTitle() {
        return 'Задача';
    }

    complete() {
        this.done = true;
        console.log(`Заача "${this.title}" выполнена`);
    }
}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Создание подзадачи');
    }

    complete() {
        super.complete();
        console.log(`Подзаача "${this.title}" выполнена`);
    }
}

Task.count = 0;

let task = new Task('Изучить JavaScript');
let subtask = new SubTask('Изучить ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);