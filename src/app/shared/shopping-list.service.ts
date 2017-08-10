import {OnInit} from '@angular/core';
import {Ingredient} from './ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService implements OnInit {
    ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomatoes', 2)
    ];

    constructor(){}

    ngOnInit(){
    }

    getIngredients(){
        return this.ingredients.slice(); //copy of array
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}