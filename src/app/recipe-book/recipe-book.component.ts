import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit() {
  //  this.chosenRecipe = this.recipeService.chosenRecipe;

  }

  // getChosenRecipe(eventRecipe: Recipe){
  //   console.log(eventRecipe);
  //    this.chosenRecipe = this.recipeService.chosenRecipe;
  // }

}
