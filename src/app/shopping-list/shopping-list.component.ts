import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../_models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Pears', 3)
  ];

  constructor() { }

  ngOnInit(): void {}

  onAddIngredients(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

}
