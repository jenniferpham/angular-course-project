import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('Cheeseburger', 'simply a test description', 'https://mgtvkron.files.wordpress.com/2015/05/in-n-out-burger.jpg'),
  //   new Recipe('Pad Thai', 'simply a test description', 'http://drinks.seriouseats.com/images/2011/11/20111103padthai.jpg'),
  //   new Recipe('Meat Balls', 'simply a test description', 'https://travinhnetworks.files.wordpress.com/2015/02/nem_nuong.jpg')
  // ];
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();  //use function to get COPY of recipes array. cannot access original recipes array. also cant access it if I make it prviate on recipeServices
  }

  // getChosenRecipe(eventRecipe: string){
  //   console.log(eventRecipe);
  //   this.specificRecipe.emit(eventRecipe);
  // }

  onRecipeClick(index: number){
    //emit event
    // this.specificRecipe.emit(recipeEvent);
    // this.recipeService.getChosenRecipe(index);
  }


}
