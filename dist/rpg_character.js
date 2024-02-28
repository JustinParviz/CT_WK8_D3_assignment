"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archers = exports.Knights = exports.Peons = exports.Orcs = exports.Weapon = void 0;
const uuid_1 = require("uuid");
class Character {
    constructor(collectGold$, weaponsList) {
        this.collectGold$ = collectGold$;
        this.weaponsList = weaponsList;
        this.weaponsList = weaponsList;
    }
    get collectGold() { return this.collectGold$; }
    addWeapon(weapon) {
        this.weaponsList.push(weapon);
    }
    removeWeapon(weaponId) {
        const index = this.weaponsList.findIndex((weapon) => weapon.id === weaponId);
        if (index !== -1) {
            this.weaponsList.splice(index, 1);
        }
    }
    stats() {
        console.log(`This Character has ${this.collectGold$}`);
    }
}
class Weapon {
    constructor(name, damagePoints, description) {
        this.name = name;
        this.damagePoints = damagePoints;
        this.description = description;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
}
exports.Weapon = Weapon;
class Orcs extends Character {
    constructor(collectGold$, weapons) {
        super(collectGold$, weapons);
    }
    attack() {
        console.log("The Orc attacked with a large Club");
    }
    defend() {
        console.log("Defended with a large wooden Shield");
    }
}
exports.Orcs = Orcs;
class Peons extends Character {
    constructor(collectGold$, weapons) {
        super(collectGold$, weapons);
    }
    attack() {
        console.log("The Peon attacked with a Club");
    }
    defend() {
        console.log("Defended with a small wooden Shield");
    }
}
exports.Peons = Peons;
class Knights extends Character {
    constructor(collectGold$, weapons) {
        super(collectGold$, weapons);
    }
    attack() {
        console.log("The Knight attacked with a Valyrian Steel Sword");
    }
    defend() {
        console.log("Defended with armor and a large iron Shield");
    }
}
exports.Knights = Knights;
class Archers extends Character {
    constructor(collectGold$, weapons) {
        super(collectGold$, weapons);
    }
    attack() {
        console.log("The Archer attacked with a Bow and Arrow");
    }
    defend() {
        console.log("Defended with a tunic");
    }
}
exports.Archers = Archers;
