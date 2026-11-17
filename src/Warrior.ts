import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character{
    public readonly RAGE_MULTIPLIER : number;

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number){
        super(name, health, baseAttack, baseDefense )
    }

    public isEnraged(): boolean{
        if (this.health <= this.maxHealth - this.maxHealth/2 ){
            return true 
        }
    }

    public override getAttack(): number{
        return this.baseAttack*this.RAGE_MULTIPLIER
    }

    public override canEquip(weapon: Weapon): boolean{
        if (weapon.kind == "staff"){
            return false
        }
    }

    public override describe(): string{
        return `[Warrior] ${this.name} - health ${this.health}/${this.maxHealth} - attack ${this.baseAttack} - defense ${this.baseDefense} - weapon: ${super._weapon}`
    }
}