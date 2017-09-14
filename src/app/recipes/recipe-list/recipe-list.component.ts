import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(0
               , 'Test Recipe'
               , 'this is for test'
               , 'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
    new Recipe(1
              , 'Salmon dish'
              , 'test recipe'
              , 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg')
  ];

  constructor() {

  }

   ngOnInit(): void {

  }

  onClickRecipeItem(data: Recipe) {
    this.recipeItemSelected.emit(data);
  }
}
