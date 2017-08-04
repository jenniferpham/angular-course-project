import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getShoppingList();
   //shoppingListService will emit an event whenever a new ingredient is pushed to array to grab the new clone of original ingredients array. Then we change that in the UI
   this.shoppingListService.ingredientsChanged.subscribe(
     (ingredients: Ingredient[])=>{
        this.ingredients = ingredients
     }
   )
  }

}
