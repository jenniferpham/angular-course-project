import {Recipe} from '../recipe-book/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class RecipeService{
    // chosenRecipe: Recipe;
    recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Cheeseburger', 'simply a test description', 'https://mgtvkron.files.wordpress.com/2015/05/in-n-out-burger.jpg', [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Pad Thai', 'simply a test description', 'http://drinks.seriouseats.com/images/2011/11/20111103padthai.jpg', [
            new Ingredient('Peanut Butter', 1),
            new Ingredient('Bread', 20)
        ]),
        new Recipe('Meat Balls', 'simply a test description', 'https://travinhnetworks.files.wordpress.com/2015/02/nem_nuong.jpg', [
            new Ingredient('Pizza', 1),
            new Ingredient('Mushrooms', 20)
        ])
    ];

    getRecipes(){
        return this.recipes.slice(); //get a copy of recipes array. can't access it directly
    }

    chooseRecipe(index: number){
        this.recipeSelected.next(this.recipes[index]);
    }
    // getChosenRecipe(index: number){
    //     // console.log(eventRecipe)
    //     this.chosenRecipe = this.recipes[index];
    //         console.log(this.chosenRecipe);
    // }

    constructor(){}

}