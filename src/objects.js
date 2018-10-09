let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi! My name is ${firstName} ${lastName}`);
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(val) {
        let nameArr = val.split(' ');
        this.firstName = nameArr[0];
        this.lastName = nameArr[1];
    }
};

/* Object.defineProperty(person, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(val) {
        this.firstName = val;
    }
}); */

console.log(person);
/* person.sayHello();

person.firstName;
person['firstName'];

let property = 'email';
person[property];
person = {
    [property]: 'Bill'
} */

/* function createCar(prop, val) {
    var car = {};

    car[prop] = val;

    return car;
} */
/* function createCar(prop, val) {
    return {
        [prop]: val,
        ['_' + prop]: val,
        [prop.toUpperCase()]: val,
        ['get' + prop](){
            return this[prop]
        }
    }
}

console.log(createCar('vin', 1)); */