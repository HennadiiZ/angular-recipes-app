import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeItem = new EventEmitter<Recipe>()

  constructor() {}

  ngOnInit(): void {}

  chosenRecipeItem():void {
    this.recipeItem.emit(this.recipe);
  }
}
