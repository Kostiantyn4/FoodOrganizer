import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addShoppingListItem = new EventEmitter<{ name: string, amount: number }>();
  @Output() deleteShoppingListItem = new EventEmitter<string>();
  @Output() clearShoppingList = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  private onAddShoppingList(name: any, amount: any) {
    this.addShoppingListItem.emit({ name: name.value, amount: amount.value });
  }

  private onDeleteShoppingList(name: any) {
    this.deleteShoppingListItem.emit(name.value);
  }

  private onClerShoppingList() {
    this.clearShoppingList.emit();
  }
}
