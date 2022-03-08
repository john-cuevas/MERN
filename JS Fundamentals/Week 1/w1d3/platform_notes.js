// map and filter

// map
// look through array, make it easier to read

const tempArr = [ 1,2,3,4,5]
let TempSquare = []
for (let i = 0; i <tempArr.length;i++){
    TempSquare.push(tempArr[i] * tempArr[i])
}
console.log(TempSquare)

// map is a for loop for each element
const squareArr = tempArr.map(element => element*element)
console.log(squareArr)
console.log(tempArr)

const shoppingList = [
    {itemName: "wetfood", price: 1.29, shop:"petco"},
    {itemName: "new cable", price: 8.99, shop:"BestBuy"},
    {itemName: "chips", price: 3.29, shop:"Trader Joes"},
]

const items = shoppingList.map((item) => item.itemName)
console.log(items)
const prices = shoppingList.map((item) => item.price)
console.log(prices)

// filter
// filter item

const evenArr = tempArr.filter((element) => element%2 ===0)
console.log(evenArr)
const cheapItem = shoppingList.filter((item) => item.price <5)
console.log(cheapItem)