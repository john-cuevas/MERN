// 03/08/2022
// Javascript is not an OOP language
// OOP

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

// ///////////////////////////////////////
// class notes OOP

class Pet{
    constructor(nickname, age){
        this.nickname = nickname
        this.age = age
        this.health = 100
        this.abilities = ["sleep", "eat", "breathe", "being cute"]
    }
    sleep(){
        this.health += 5
        // console.log(this.nickname + "is sleeping1")
        console.log(`${this.nickname} is sleeping2`)
    }
}

//  instantiate class

const pikachu = new Pet("pikachu", 25)
console.log(pikachu)
pikachu.sleep()

//  inheritance

class Cat extends Pet{
    constructor(nickname, age){
        super(nickname, age)
        this.health = 200
        this.mood = "grumpy"

    }
    meow(){
        console.log("MEOWWWWWW")
        super.sleep()

        // use this if cat has a sleep method, but both will work since pet has sleep method
        // this.sleep()
    }

    eat(item){
        if(item instanceof Food){
            console.log(`${this.nickname} is eating ${item.itemName}`)
            this.health += item.energy
        }
        else if(item instanceof Toy){
            console.log(`OMG!! ${this.nickname} is eating ${item.itemName}`)
            this.health -= item.energy
        }
        else{
            throw new Error("Item must be food/toy!")
        }
    }
}

// class Cat extends Pet{
//     constructor (age){
//         super("cat", age)
//         this.health = 200

//     }
// }


const pepper = new Cat("Pepper", 13)
console.log(pepper)
pepper.sleep()
pepper.meow()

// const pepper1 = new Cat( 13)
// console.log(pepper1)

class Item{
    constructor(itemName, energy){
        this.itemName = itemName
        this.energy = energy
    }
}

class Food extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }

}

class Snack extends Food{
    constructor(itemName, energy){
        super(itemName, energy)
    }

}
class Toy extends Item{
    constructor(itemName, energy){
        super(itemName, energy)
    }

}

const fish = new Food("fish", 10)
const chips = new Snack("chips", 5)
const cable = new Toy("cable", 20)

pepper.eat(pikachu)
pepper.eat(chips)
console.log(pepper)