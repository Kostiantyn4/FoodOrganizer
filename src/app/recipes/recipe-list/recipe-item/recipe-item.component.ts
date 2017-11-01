import { RecipeService } from '../../recipe.service';
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../../recipes.module';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipesList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() { }

  onSelectedRecipe(data: Recipe) {
    this.recipeService.recipeSelected.emit(data);
  }
}
