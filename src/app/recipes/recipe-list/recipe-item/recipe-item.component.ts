import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe.model';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  // @Output() recipeSelected = new EventEmitter<void>()

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {}

  onSelected(name: string): void {
    // this.recipeSelected.emit();
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['recipe',]);
  }
}
