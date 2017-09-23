import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  public onAddShoppingListItem($event: Ingredient) {
    this.ingredients.push($event);
  }

  public onClearShoppingList() {
    this.ingredients.length = 0;
  }

  onDeleteShoppingListItem($event: Event) {
    const idx = this.ingredients.indexOf(this.ingredients.find(x => x.name == $event.toString()));
    this.ingredients.splice(idx, 1);
  }
}
