import {Weapon, Orcs, Peons, Knights, Archers} from './rpg_character';


let myWeapon1 = new Weapon("Sword", 20)
console.log(myWeapon1.name)

let myWeapon2 = new Weapon("Battle Axe", 15)
console.log(myWeapon2.name)

let myWeapon3 = new Weapon("Club", 10)
console.log(myWeapon3.name)

let myWeapon4 = new Weapon("War Hammer", 25)
console.log(myWeapon4.name)

let myWeapon5 = new Weapon("Bow and Arrow", 10)
console.log(myWeapon5.name)

let myWeapon6 = new Weapon("Valyrian Steel Sword", 30)
console.log(myWeapon6.name)


let weaponsList: Weapon[] = [myWeapon1, myWeapon2, myWeapon3, myWeapon4, myWeapon5, myWeapon6]


let myOrcs = new Orcs("50 gold", weaponsList)
console.log(myOrcs.attack())
console.log(myOrcs.defend())
console.log(myOrcs.stats())


let myPeons = new Peons("20 gold", weaponsList)
console.log(myPeons.attack())
console.log(myPeons.defend())
console.log(myPeons.stats())


let myKnights = new Knights("150 gold", weaponsList)
console.log(myKnights.attack())
console.log(myKnights.defend())
console.log(myKnights.stats())


let myArchers = new Archers("100 gold", weaponsList)
console.log(myArchers.attack())
console.log(myArchers.defend())
console.log(myArchers.stats())

