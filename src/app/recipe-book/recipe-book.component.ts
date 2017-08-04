import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit() {
  //  this.chosenRecipe = this.recipeService.chosenRecipe;

  //whenever event is emitted, this variable will change
  this.recipeService.recipeSelected.subscribe(
    (recipe:Recipe) => {
      this.selectedRecipe = recipe;
    }
  )
  }

  // getChosenRecipe(eventRecipe: Recipe){
  //   console.log(eventRecipe);
  //    this.chosenRecipe = this.recipeService.chosenRecipe;
  // }

}
