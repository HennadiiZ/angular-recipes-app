import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../_models/recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
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

  ngOnInit(): void {}

}
