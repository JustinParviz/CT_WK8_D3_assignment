import {v4 as uuidv4} from 'uuid';


abstract class Character {

    constructor(protected collectGold$: string, public weaponsList: Weapon[]) {this.weaponsList = weaponsList}
    
    get collectGold():string {return this.collectGold$}
    
    public addWeapon(weapon:Weapon): void {
        this.weaponsList.push(weapon);
    } 

    public removeWeapon(weaponId: string): void {
        const index = this.weaponsList.findIndex( (weapon) => weapon.id === weaponId )

        if (index !== -1) {
            this.weaponsList.splice(index, 1)
        }
    }
    
    public stats(): void {
        console.log(`This Character has ${this.collectGold$}`)
    }
}


interface Offense {
    attack():void
}

interface Defense {
    defend():void
}



export class Weapon {

    private _id: string;

    constructor(
        public name: string,
        public damagePoints: number,
        public description?: string
    ){
        this._id = uuidv4();
    }

    get id(): string {
        return this._id
    }
}



export class Orcs extends Character implements Offense, Defense {
    constructor(collectGold$: string, weapons: Weapon[]){
        super(collectGold$, weapons)
    }

    public attack(): void {
        console.log("The Orc attacked with a large Club")
    }
    
    public defend(): void {
        console.log("Defended with a large wooden Shield")
    }
}
   


export class Peons extends Character implements Offense, Defense {
    constructor(collectGold$: string, weapons: Weapon[]){
        super(collectGold$, weapons)
    }

    public attack(): void {
        console.log("The Peon attacked with a Club")
    }
    
    public defend(): void {
        console.log("Defended with a small wooden Shield")
    }
}



export class Knights extends Character implements Offense, Defense {
    constructor(collectGold$: string, weapons: Weapon[]){
        super(collectGold$, weapons)
    }

    public attack(): void {
        console.log("The Knight attacked with a Valyrian Steel Sword")
    }
    
    public defend(): void {
        console.log("Defended with armor and a large iron Shield")
    }
}
    


export class Archers extends Character implements Offense, Defense {
    constructor(collectGold$: string, weapons: Weapon[]){
        super(collectGold$, weapons)
    }

    public attack(): void {
        console.log("The Archer attacked with a Bow and Arrow")
    }
    
    public defend(): void {
        console.log("Defended with a tunic")
    }
}


