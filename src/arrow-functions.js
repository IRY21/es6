let add = (x, y) => x + y;

let squere = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log('Logging');

let multiply = (x, y) => {
    let result = x * y;
    return result;
}

let getPerson = () => ({ name: 'John' });

(() => console.log('IIFE'))();

console.log(add(2, 5));
console.log(squere(3));
console.log(giveMeAnswer());
log();
console.log(multiply(3, 2));
console.log(getPerson());


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(num => sum += num);

let squared = numbers.map(n => n * n);

console.log(sum);
console.log(squared);


let person = {
    name: 'Bob',
    greet: function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
            console.log(this);
        }, 2000);
    }
};

person.greet();

/Нельзя/
let Task = () => console.log('Creating a task');

let task = new Task();

Task.bind();
Task.call();
Task.apply();