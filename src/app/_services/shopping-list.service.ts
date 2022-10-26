import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../_models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pears', 3)
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
    // return this.ingredients; <-- works
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
