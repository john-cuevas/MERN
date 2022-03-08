class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }

}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }

    // attack method
    attack(Unit){
        // reduce target res by power
        if(Unit instanceof Card){
            Unit.resilience -= this.power    
        }
        else{
            throw new Error("Target must be a unit")
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    // play method
    play(Unit){
        if(Unit instanceof Card){
            if(this.stat == Unit.resilience){
                Unit.resilience += this.magnitude
            }
            else{
                Unit.power += this.magnitude
            }
        }
        else{
            throw new Error("Target must be a unit")
        }

    }
}

const redBeltNinja = new Unit("Red", 3, 3, 4)
console.log(redBeltNinja)
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3)
hardAlgo.play(redBeltNinja)
console.log(redBeltNinja)
const blackBeltNinja = new Unit("Black", 4, 5, 4)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2)
unhandledPromiseRejection.play(redBeltNinja)
console.log(redBeltNinja)
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2)
pairProgramming.play(redBeltNinja)
console.log(redBeltNinja)
console.log(blackBeltNinja)
redBeltNinja.attack(blackBeltNinja)
console.log(blackBeltNinja)

// console.log(hardAlgo)