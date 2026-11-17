import { Weapon } from "./Weapon";


export abstract class Character {
    public readonly name : string;
    public readonly maxHealth : number;
    public readonly baseAttack : number;
    public readonly baseDefense : number;
    private _health : number;
    private _weapon : Weapon | null;

    public constructor(name: string, health: number, baseAttack: number, baseDefense: number){
        this.name = name
        this.maxHealth = health;
        this.baseAttack = baseAttack
        this.baseDefense = baseDefense
        this._weapon = null

        if (health <=0 ){
            throw new Error(`The health of ${name} must be strictly positive.`)
        }else{
            this._health = health;
        }
    }

    public get health() : number{
        return this._health
    }

    public abstract getAttack() : number
  
    public abstract canEquip(weapon: Weapon): boolean

    protected getWeaponAttackBonus(): number{
        return 
    }

    public isAlive(): boolean{
        if(this._health > 0 ){
            return true
        }
    }

    public describe(): string{
        return `${this.name} - ${this._health} - ${this.baseAttack} - ${this.baseDefense} - ${this._weapon}`
    }

    public equip(weapon: Weapon): void{
        if(weapon.kind){
            throw new Error(`${this.name} cannot equip ${this._weapon}.`)
        }else{

        }
    }

    public heal(amount: number): void{
        if (amount > this.maxHealth ){
            throw new Error()
        }else
             this._health = this._health + amount
    }

    protected computeDamage(target: Character): number{
        return target.baseDefense 
    }

    public attack(target: Character): number{
        return 
    }

}