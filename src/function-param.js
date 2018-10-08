/* function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
} */

/* function greet(greeting, name) {
    if(greeting !== undefined && name !== undefined) {
        console.log(`${greeting} ${name}`);
    } else if (greeting === undefined && name !== undefined) {
        console.log(`Hello ${name}`);
    } else if (greeting !== undefined && name === undefined) {
        console.log(`${greeting} friend`);
    } else {
        console.log('Hello freind');
    }
} */

function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();


/* function sum() {
    console.log(arguments);

    var sum = 0;

    [].forEach.call(arguments, function(value) {
        sum += value;
    });

    console.log(sum);
} */

/* function sum(...values) {
    console.log(values);

    let sum = 0;

    values.forEach(function(val) {
        sum += val;
    });

    console.log(sum);
} */

function sum(...values) {
    var sum = values.reduce(function(acc, val) {
        return acc += val;
    }, 0);

    console.log(sum);
}

sum(5, 7, 2, 10);