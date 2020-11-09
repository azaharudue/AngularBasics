export class Ingredient {
 /*   public name_: string;
    public amount : number; 
    constructor(name:string, amount:number){
        this.name_= name;
        this.amount =amount;
    }
     */
    //another way to use constructor for auto add properties: 
    constructor(public name: string, public amount: number){}
}