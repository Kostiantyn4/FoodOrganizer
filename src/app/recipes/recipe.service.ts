import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.module';

export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(0
                   , 'Test Recipe'
                   , 'this is for test'
                   , 'http://maxpixel.freegreatpicture.com/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'),
        new Recipe(1
                  , 'Salmon dish'
                  , 'test recipe'
                  , 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg')
      ];

    public getRecipesList() {
        return this.recipes.slice();
    }
}
