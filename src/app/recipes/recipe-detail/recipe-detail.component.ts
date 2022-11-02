import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';
import { ShoppingListService } from 'src/app/_services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;
  // toShoppingList: Recipe[] = [];
  id: number;

  constructor(
    // private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeService.getRecipe(this.id);
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  ToShoppingList(): void{
    // this.shoppingListService.addIngredient();
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
