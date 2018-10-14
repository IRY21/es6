let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

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


class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;        
    }

    next() {
        let result = { value: undefined, done: true };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }

        return result;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(...tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let taskList = new TaskList();

taskList.addTasks(['Изучить JavaScript', 'Изучить ES6', 'Изучить Vue']);

for(let task of taskList) {
    console.log(task);
}
