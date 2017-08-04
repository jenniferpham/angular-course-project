import {OnInit, EventEmitter} from '@angular/core';
import {Ingredient} from './ingredient.model';

export class ShoppingListService implements OnInit {
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomatoes', 2)
    ];

    constructor(){}

    ngOnInit(){
        // this.shoppingIngAdd.subscribe(
        //     (event: Ingredient)=>{
        //         this.addToShoppingList(event);
        //     }
        // )
    }

    getShoppingList(){
        return this.ingredients.slice(); //get copy of ingredients array so you cant access original array directly
    }
    
    addToShoppingList(ing: Ingredient){
        this.ingredients.push(ing);
        this.ingredientsChanged.emit(this.ingredients.slice());  //emit a copy of this.ingredients array

    }
}