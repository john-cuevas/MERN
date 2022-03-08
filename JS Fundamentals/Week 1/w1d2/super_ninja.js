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
            `Name: ${this.name}, 
            Strength: ${this.strength},
            Speed: ${this.speed},
            Health: ${this.health}`
        );
    }

    // add +10 health to ninja
    drinkSake(){
        this.health += 10;
        console.log(
            `${this.name}'s health is now ${this.health}`
        )
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.drinkSake()
// console.log(ninja1);

// child Sensei class
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
    }

    // sensei function - speak wisdom
    speakWisdom(){
        super.drinkSake()
        console.log(
            "What one programmer can do in one month, two progranners can do in two months."
        );
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();