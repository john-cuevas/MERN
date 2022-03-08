// rest/spread

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};


const { firstName, lastName, ...attributes } = person;


const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true

// arrow

function add(a,b){
    return a+b
}

// if you have braces, you need return
// can skip curly. Without {}, it is an implicit return statement

const add2 = (a,b) => {
    return a+b
}

const add3 = (a,b) => a+b

console.log(add3(3,5))


// Ternary Operator

// let canAfford = (itemPrice, accountBalance) => {
//     if (itemPrice > accountBalance){
//         return `Cannot afford! You are $${itemPrice - accountBalance} short`;
//     } else {
//         return "Can afford!"
//     }
// }

let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance

        // Truthy statement
        ? `Cannot afford! You are $${itemPrice - accountBalance} short`

        // Falsy statement
        : "Can afford";

}


let myBankAccountBalance = 1000;
const drone = 1001;
let droneOnSale = drone - drone * 0.03;

console.log(canAfford(drone, myBankAccountBalance));
console.log(canAfford(droneOnSale, myBankAccountBalance));

// classes

class Vehicle{

    // constructor always runs whenever we create a new instance
    constructor(manufacturer, model, color) {
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }

    // method, function inside a class
    drive(){
        this.miles += 10;
        console.log(
            `You drove your ${ this.constructor.name } and it now has ${ this.miles } miles on it.`
        );
    }

    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}

const car = new Vehicle ("BMW", "M5", "blue");
car.drive();
console.log(car.miles);
console.log(car);

// extends keyword - we can define new classes that inherit from existing classes

// child M5 class

class M5 extends Vehicle{
    constructor(color){

        // super allows us to call the constructor of the parent class
        super("BMW", "M5", color);
        this.hp = 616;
    }

    // simple function in the child class
    childFunction(){

        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
    printSpecSummary(){
        console.log(
            `BMW M5 with a 4.4L V8 Twin Turbo engine packing ${this.hp}HP and 553 lb-ft TQ`
        );
    }
}

const m5 = new M5("yellow");
m5.childFunction();

console.log(m5)