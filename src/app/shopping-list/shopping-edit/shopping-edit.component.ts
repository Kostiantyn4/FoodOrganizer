import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addShoppingListItem = new EventEmitter<Ingredient>();
  @Output() deleteShoppingListItem = new EventEmitter<string>();
  @Output() clearShoppingList = new EventEmitter<string>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  private onAddShoppingList(name: any, amount: any) {
    this.addShoppingListItem.emit(new Ingredient(name.value, amount.value));
  }

  private onDeleteShoppingList(name: any) {
    this.deleteShoppingListItem.emit(name.value);
  }

  private onClerShoppingList() {
    this.clearShoppingList.emit();
  }
}
