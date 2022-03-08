// GIVEN
console.log(example);
let example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1.
console.log(hello);                                   
var hello = 'world'; 

// logs undefined

console.log(hello);                                   
let hello = 'world'; 

// cannot access hello before initialization

// 2.
var needle = 'haystack';
test(); // function gets hoisted to top
function test(){
    var needle = 'magnet'; // assign value of magnet to global 'needle'
    console.log(needle); // prints 'magnet' to terminal
}
// interpreted as 
var needle = 'haystack';
function test(){
    var needle = 'magnet'; 
    console.log(needle); 
}
test(); 



// 3. 

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// super cool printed to terminal, print() function nevers gets called

// interpreter reads

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4. 

var food = 'chicken'; // global declaration, then gets printed to console
console.log(food);
eat();
function eat(){ // function gets hoisted to top
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// chicken, half-chicken

// interpreter reads
var food = 'chicken'; 
console.log(food);
function eat(){ 
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();


// 5. 

mean(); // hoisted to top before function is actually defined -- error 
console.log(food); // food is never defined outside of mean function
var mean = function() { // hoisted to top
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);



// 6. 
console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() { // function gets hoisted to top, prints both console.log statements 
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// undefined, rock, r&b, disco

// 7. 
dojo = "san jose"; // assign value to global 'dojo'
console.log(dojo);
learn();
function learn() { // gets hoisted to top, prints both console.log statements
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// san jose, seattle, burbank, san jose

// interpreted 

dojo = "san jose"; // assign value to global 'dojo'
console.log(dojo);
function learn() { // gets hoisted to top, prints both console.log statements
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

// 8. bonus

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){ // function gets hoisted to top
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// intepreted

function makeDojo(name, students){ // function gets hoisted to top
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));

// {name: Chicago, students: 65, hiring: true}, error with closed for now bc dojo is immutable - cannot be reassigned