import { Component, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shared/shopping-list.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.ingredients = this.shoppingListService.getIngredients();
   //shoppingListService will emit an event whenever a new ingredient is pushed to array to grab the new clone of original ingredients array. Then we change that in the UI
   this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
     (ingredients: Ingredient[])=>{
        this.ingredients = ingredients
     }
   )
  }

  ngOnDestroy(){ //import to prevent any memory leaks
    this.subscription.unsubscribe();
  }

}
