import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipes.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipesList: Recipe[];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(data: Recipe) {
    this.selectedRecipe.emit(data);
  }

}
