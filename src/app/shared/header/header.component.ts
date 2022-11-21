import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/_models/recipe.model';
import { User } from 'src/app/_models/user.model';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import { RecipeService } from 'src/app/_services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() toggler = new EventEmitter();
  collapsed = false;
  user = null;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private authService: AuthService
    // private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.authService.userSubject.subscribe(((res: User) => {
      console.log("12345678890-",this.user);
      this.user = res;
      console.log("-----=====-",this.user);
    }))
  }

  // onRecipe() {
  //   // this.toggler.emit(false);
  //   this.router.navigate(['recipes']);
  // }

  // onShoppingList() {
  //   // this.toggler.emit(true);
  //   this.router.navigate(['shopping-list']);
  // }

  saveData(): void {
    // const recipes = this.recipeService.getRecipes();
    this.httpService.saveRecipes().subscribe(
      ((data: Recipe[])=> {
        console.log(data);
      })
    );
  }

  fetchData(): void {
    this.httpService.fetchRecipes().subscribe();
  }
}
