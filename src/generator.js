/* function* generator() {
    console.log('Start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Finish');
} 
console.log(typeof generator);
let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */

/* function generate() {
    let curent = 1;
    console.log('Start');
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result  = {
                        value: void 0,
                        done: true
                    };

                    if(curent <= 3) {
                        result.value = curent;
                        result.done = false;
                        curent++;
                    } else {
                        console.log('Finish');
                    }

                    return result;
                }
            }
        }
    }
}
console.log(typeof generate);
let iterator = generate()[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */



/* function* range(start, end) {
    let curent = start;

    while(curent <= end) {
        yield curent++;
    }
} 
for(let num of range(1, 10)) {
    console.log(num);
} */

/* function range2(start, end) {
    let curent = start;

    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {
                        value: void 0,
                        done: true
                    }

                    if(curent <= end) {
                        result.value = curent;
                        result.done = false;
                        curent++;
                    }

                    return result;
                }
            }
        }
    }
}
for(let num of range2(1, 10)) {
    console.log(num);
} */



let numbers = {
    *range(start, end) {
        let curent = start;
        while(curent <= end) {
            yield curent++;
        }
    } 
};
for(let num of numbers.range(1, 10)) {
    console.log(num);
}