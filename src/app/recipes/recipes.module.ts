export class Recipe {
    public recipeId: number;
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(recipeId: number, name: string, desc: string, imagePath: string) {
        this.recipeId = recipeId;
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}
