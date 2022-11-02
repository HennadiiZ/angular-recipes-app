import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../_models/ingredient.model';
import { Recipe } from '../_models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Shrimps',
      'Shrimps dish',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Shrimps', 5),
        new Ingredient('Greens', 5),
      ]
    ),
    new Recipe(
      'Donunts',
      'sweet',
      'https://www.publicdomainpictures.net/pictures/270000/velka/donuts-15367481797jY.jpg',
      [
        new Ingredient('Shugar', 3),
        new Ingredient('dough', 1),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number):Recipe {
    console.log(index);
    console.log(this.recipes[index]);
    return this.recipes[index];
  }
}
