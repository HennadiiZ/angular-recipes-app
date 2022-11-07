import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Creating a New App Correctly
// MUST READ
// In the next lecture, we set up the course project.
// Make sure, you do create that app by also adding the --no-strict flag to the ng new command - otherwise you will run into issues later on (we'll still dive into that "Strict Mode" later in the course of course, no worries)!
// We'll also install the Bootstrap CSS Framework and in this course, we use version 3 of the framework. Install it via npm install --save bootstrap@3  => The @3  is important!
// Additionally, when using a project created with Angular CLI 6+ (check via ng v ), you'll have an angular.json  file instead of an .angular-cli.json  file. In that file, you still need to add Bootstrap to the styles[]  array as shown in the next video, but the path should be node_modules/bootstrap/dist/css/bootstrap.min.css , NOT ../node_modules/bootstrap/dist/css/bootstrap.min.css . The leading ../  must not be included.
// Also see this lecture - I do show the complete setup process there: https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/6655614/
// If you're facing any problems, please have a look at this very thorough thread by Jost: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/17862130#questions/10444944

// 48. Setting up the Application
  // npm install --save bootstrap@3

// 49. Creating the Components

// 50. Using the Components
// 51. Adding a Navigation Bar
// 52. Alternative Non-Collapsable Navigation Bar

// 53. Creating a "Recipe" Model

// 54. Adding Content to the Recipes Components
// 54. My solution

// 55. Outputting a List of Recipes with ngFor
// 56. Displaying Recipe Details

// 57. Working on the ShoppingListComponent
// 58. Creating an "Ingredient" Model (shortcut)

// 59. Creating and Outputting the Shopping List
// 60. Adding a Shopping List Edit Section
// 61. Wrap Up & Next Steps

// 85. Introduction
// 86. Adding Navigation with Event Binding and ngIf

// 87. Passing Recipe Data with Property Binding

// 88. Passing Data with Event and Property Binding (Combined)
// 90. Allowing the User to Add Ingredients to the Shopping List


// 103. Building and Using a Dropdown Directive

// 104. Closing the Dropdown From Anywhere

// SERVICES
// 117. Setting up the Services
// 118. Managing Recipes in a Recipe Service
// 118. Managing Recipes in a Recipe Service (2)
// 118. Managing Recipes in a Recipe Service (3)
// 118. Managing Recipes in a Recipe Service (4)

// 119. Using a Service for Cross-Component Communication

// 120. Adding the Shopping List Service
// 121. Using Services for Pushing Data from A to B

// 122. Adding Ingredients to Recipes

// 123. Passing Ingredients from Recipes to the Shopping List (via a Service)

// ROUTING
// 155. Planning the General Structure
// 156. Setting Up Routes
// 157. Adding Navigation to the App
// 158. Marking Active Routes
// 159. Fixing Page Reload Issues
// 160. Child Routes: Challenge

// 161. Adding Child Routing Together
// 162. Configuring Route Parameters

// 163. Passing Dynamic Parameters to Links

// 164. Styling Active Recipe Items

// 165. Adding Editing Routes

// 166. Retrieving Route Parameters

// 167. Programmatic Navigation to the Edit Page

// 169. Project Cleanup

// try
// try

// 181. Improving the Reactive Service with Observables (Subjects)

// FORMS
// 219. TD: Adding the Shopping List Form

// 220. Adding Validation to the Form
// 221. Allowing the Selection of Items in the List
