// callback functions
setTimeout(function () {
    console.log("start")
}, 3000);

console.log("end");

// setTimeout() represents a "callback function" a function that is passed
// into another function to be called by the function
var exampleFunction = function (message) {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");

function parentFunction(callback) {
    callback("information from the parent function");
}
parentFunction(exampleFunction);

parentFunction(function (message) {
    console.log(message);
});


// the big freeze

const arr = [1, 2, 3, 4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 

console.log(arr)
// can no longer push to arr
const arr1 = Object.freeze([1, 2, 3, 4]);
arr1.push(300); // we're no longer allowed to change `arr`

const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

// using ... (spread)

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme)

// using .concat()
const needThyme1 = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
console.log(needThyme1)

// using slice
// function that can take 2 parameters and return an array of the values that have 
// indexes between those parameters. Follow with a comma and a new object

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

console.log(gotTheThyme)

// sorting - sort() works by converting values into strings before sorting
// want to sort based off of attribute insde of an object, can do that by using 
// sort by using a callback function

// sort based on ingredient name


const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);

console.log(sortedGroceries)


// map and filter

// map
// look through array, make it easier to read

const tempArr = [1, 2, 3, 4, 5]
let TempSquare = []
for (let i = 0; i < tempArr.length; i++) {
    TempSquare.push(tempArr[i] * tempArr[i])
}
console.log(TempSquare)

// map is a for loop for each element
const squareArr = tempArr.map(element => element**2)
console.log(squareArr)
console.log(tempArr)

const shoppingList = [
    { itemName: "wetfood", price: 1.29, shop: "petco" },
    { itemName: "new cable", price: 8.99, shop: "BestBuy" },
    { itemName: "chips", price: 3.29, shop: "Trader Joes" },
]

const items = shoppingList.map((item) => item.itemName)
console.log(items)
const prices = shoppingList.map((item) => item.price)
console.log(prices)

// filter
// filter item

const evenArr = tempArr.filter((element) => element % 2 === 0)
console.log(evenArr)
const cheapItem = shoppingList.filter((item) => item.price < 5)
console.log(cheapItem)

// filters groceries that only have letter "o"
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

// filters out even, then cubes the remaining
const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter(value => value %2 !== 0).map(value => value **3);
console.log(oddCubes)
