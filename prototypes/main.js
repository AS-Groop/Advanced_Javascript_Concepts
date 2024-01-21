// Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

// musician.__proto__=person
//
// console.log(musician.plays)
// console.log(musician.alive)



// Js now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

Object.setPrototypeOf(musician, person)
// console.log(Object.getPrototypeOf(musician))
// console.log(musician.__proto__)
// console.log(musician.__proto__===Object.getPrototypeOf(musician))


// console.log(musician.plays)
// // missing property => go to person
// console.log(musician.alive)

// // Extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician
}

// console.log(guitarist.alive)
// console.log(guitarist.plays)
// console.log(guitarist.strings)
// console.log(guitarist)
// // No circular references allowed (person.__proto__ can't be guitarist)
// // The __proto__ value must be an object or null
// // An object can only directly inherit from one object


// // object with getter and setter
// const car = {
//     doors: 2,
//     seat: "vinyl",
//     get seatMaterial() {
//         return this.seat
//     },
//     set seatMaterial(material) {
//         this.seat = material
//     }
// }
//
// const luxuryCar = {}
// Object.setPrototypeOf(luxuryCar, car)
// luxuryCar.seatMaterial = "leather"
// console.log(luxuryCar)
// console.log(luxuryCar.doors)
// console.log(car)

// // Walking up the chain - props and methods are not copied
// console.log(luxuryCar.valueOf())








//// Getting the keys of an object
// console.log(Object.keys(luxuryCar))
//// loop through each object key
// Object.keys(luxuryCar).forEach(key=>{
//     console.log(key)
// })
//// But a for..in loop includes inherited props
// for (let key in luxuryCar) {
//     console.log(key)
// }












//// Object constructor
// function Animal(species) {
//     this.species = species
//     this.eats = true
// }
// Animal.prototype.walks = function () {
//     return `A ${this.species} is walking.`
// }
//
// const Bear = new Animal('bear')
//
// console.log(Bear)
// console.log(Bear.walks())

//// The prototype property is where inheritable props and methods are
// console.log(Bear.__proto__)
// console.log(Bear.__proto__ === Animal.prototype)
// console.log(Animal.prototype)















//// Now an ES6 Classes example of inheritance

// class Vehicle {
//     constructor() {
//         this.wheels = 4
//         this.motorized = true
//     }
//
//     ready() {
//         return "Ready to go!"
//     }
// }
//
//
// class Motorcycle extends Vehicle {
//     constructor() {
//         super();
//         this.wheels = 2
//     }
//
//     wheelie() {
//         return "On one wheel now!"
//     }
// }
//
// const myBike = new Motorcycle()
// console.log(myBike)
// console.log(myBike.wheels)
// console.log(myBike.ready())
// console.log(myBike.wheelie())