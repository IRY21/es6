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



/--------Start---distructuringObject--------------------/

let user = {
    firstname: 'John', 
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

/* let {firstname: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};
console.log(first, last, age); */

let {firstname: first, lastname: last, social: { facebook: fb }, age = 25} = user;
console.log(first, last, fb, age);

function post(url, {data: { firstname, lastname }, cache}) {
    console.log(firstname, lastname, cache);
}
let result = post('api/user', { data: user, cache: false});

function getUserInfo() {
    return {
        firstname: 'John', 
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }
}

let { firstname, lastnamem, social: { twitter }} = getUserInfo();

console.log(firstname, lastnamem, twitter);
