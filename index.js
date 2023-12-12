//Replace all the vars with let and const.
// Alter the code however necessary to make sure this continues to work
//so the pet's name isn't "John", but instead "spot" is returned. 
//You only need to delete var and insert let and const
// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

//Rewrite using an arrow function
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(carrot => {
//         return { type: "carrot", name: carrot }
//     })
// }
// console.log(mapVegetables(carrots))
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

// var doMathSum = (a, b) => a + b


// var produceProduct = (a, b) =>  a * b

//Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following
let firstName = "Jane"
let lastName = "Doe"
let age = 100
console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}`)

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  const filterForDogs = (arr)=> arr.filter(animal => animal.type === "dog" ?true : false)
// console.log(filterForDogs(animals))

 
 