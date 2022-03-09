const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// id divisible by 3

const pkmnIds3 = pokémon.filter(p => p.id%3 === 0);

console.log(pkmnIds3)

// "fire" type

const firepkmn = pokémon.filter( p => p.types.includes("fire"))
console.log(firepkmn)

// more than one type
const onepkmn = pokémon.filter( p => p.types.length > 1 )
console.log(onepkmn)

// names of pokemon
const pkmnNames = pokémon.map( p => p.name )
console.log(pkmnNames)

// id greater than 99

const pkmn_99 = pokémon.filter(p => p.id > 99)
console.log(pkmn_99)

// type only poision

const poison_pkmn = pokémon.filter(p => p.types.length < 2 && p.types.includes("poison"))
console.log(poison_pkmn)

// first type of all pokemon whose second type is flying
const flying_pkmn = pokémon.filter(p => p.types.includes("flying")).map(p => p.types[0])
console.log(flying_pkmn)

// count of normal type
const normal_pkmn = pokémon.filter(p => p.types.length < 2 && p.types.includes("normal"))
console.log(normal_pkmn.length)


