import { Injectable } from '@angular/core';
import { Recipe } from '../_models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    ),
    new Recipe(
      '2 test Recipe',
      '2 test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    )
  ];

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
