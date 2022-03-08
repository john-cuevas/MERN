class Ninja{
    constructor(name, health = 10){
        this.speed =3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }

    // method log ninja's name

    sayName(){
        console.log(this.constructor.name)
    }

    // method to show ninja's stats
    showStats(){
        console.log(
            `Name: ${this.constructor.name}, 
            Strength: ${this.constructor.strength},
            Speed: ${this.constructor.speed},
            Health: ${this.constructor.health}`
        );
    }

    // add +10 health to ninja
    drinkSake(){
        this.health += 10;
        console.log(
            `${this.constructor.name}'s health is now ${this.health}`
        )
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake()
console.log(ninja1);
