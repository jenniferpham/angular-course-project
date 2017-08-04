import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  private recipeIngredients: Ingredient[];
  // recipeDetail: Recipe;

  
  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (data: Recipe)=>{
    //     this.recipeDetail = data;
    //   }
    // );
    // this.recipeDetail = this.recipeService.recipeSelected;
  }

  addRecipeIngredients(){
    this.recipeIngredients = this.recipeDetail.ingredients;
    for(let i=0; i<this.recipeIngredients.length; i++){
      let recipeIngredient =  this.recipeIngredients[i];
      this.shoppingListService.addToShoppingList(recipeIngredient);
    }
  }

}
