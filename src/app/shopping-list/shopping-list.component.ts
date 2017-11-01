import { ShoppintListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppintListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredienceList();
  }

  public onAddShoppingListItem($event: Ingredient) {
    this.shoppingListService.addShoppingListItem($event);
  }

  public onClearShoppingList() {
    this.shoppingListService.clearShoppingList();
  }

  onDeleteShoppingListItem($name: Event) {
    this.shoppingListService.deleteShoppingListItemByName($name.toString());
  }
}
