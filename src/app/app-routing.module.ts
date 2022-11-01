import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  // { path: '', component: RecipeListComponent},
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    // { path: 'recipe-list', component: RecipeListComponent, children: [
    //
    // ]},
    // { path: 'recipe-list', component: RecipeListComponent },
    // { path: 'recipe-detail', component: RecipeDetailComponent }
    { path: ':id/recipe-item', component: RecipeItemComponent },
  ]},
  // { path: 'recipe-item', component: RecipeItemComponent },



  { path: 'shopping-list', component: ShoppingListComponent, children: [
    { path: '', component: ShoppingEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
