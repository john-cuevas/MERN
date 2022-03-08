// MERN Week 1 Day 1 3/7/2022

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





