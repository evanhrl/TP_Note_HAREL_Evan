import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Wizard extends Character{
    public readonly SPELL_COST : number;
    public readonly maxMana : number;
    private _mana : number

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number, mana: number){
        super(name,health, baseAttack, baseDefense)
        this.maxMana = mana;
        if (mana < 0){
            throw new Error(`The mana of ${this.name} cannot be negative.`)
        }else{
            this._mana = mana
        }
    }

    public getmana(): number{
        return this._mana
    }

    public set mana(value: number){
        if(){
            throw new Error(`The mana of ${this.name} must be between 0 and ${this.maxMana}.`)
        }else{

        }
    }

    public canCastSpell(): boolean{
        if (this._mana >= this.SPELL_COST){
            return true
        }
    }

    public override getAttack(): number{

    }

    public override canEquip(weapon: Weapon): boolean{
        if (weapon.kind == "staff"){
            return true
        }
    }

    public override describe(): string{

    }

    public override attack(target: Character): number{

    }
}