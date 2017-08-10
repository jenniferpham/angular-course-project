import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {RecipeService} from '../../../shared/recipe.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   
  }

  onSelected(recipe: Recipe){
    this.recipeService.recipeSelected.next(recipe);
    console.log('onselect');
    
  }

}
