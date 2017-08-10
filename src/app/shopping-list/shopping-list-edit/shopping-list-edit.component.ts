import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  // @Output() shoppingIngAdd: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(){
    const newIng = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    // this.shoppingListService.shoppingIngAdd.emit(newIng);

    this.shoppingListService.addIngredient(newIng);
    // this.shoppingListService.getShoppingList();
  }

}
