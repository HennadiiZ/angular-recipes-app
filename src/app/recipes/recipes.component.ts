import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe;

  constructor() {}

  ngOnInit(): void {}

  showRecipeItem(recipe: Recipe): void {
    this.recipe = recipe;
  }
}
