import { Ingredient } from '../shared/ingredient.model';

export class ShoppintListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 10)
    ];

    public getIngredienceList() {
        return this.ingredients;
    }

    public addShoppingListItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    public clearShoppingList() {
        this.ingredients.length = 0;
    }

    public deleteShoppingListItemByName(ingredientName: string) {
        const idx = this.ingredients.indexOf(this.ingredients.find(x => x.name === ingredientName));
        this.ingredients.splice(idx, 1);
    }
}
