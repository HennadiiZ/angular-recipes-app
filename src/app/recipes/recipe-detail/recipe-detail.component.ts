import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  toShoppingList: Recipe[] = [];

  constructor(
    // private shoppingListService: ShoppingListService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {}

  ToShoppingList(): void{
    // this.shoppingListService.addIngredient();
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
