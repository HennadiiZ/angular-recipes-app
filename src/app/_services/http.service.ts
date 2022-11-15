import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../_models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  LINK = 'https://httpangmxshwud-default-rtdb.firebaseio.com/'; // starting point
  endpoint = 'posts.json';

  constructor(private http: HttpClient) {}

  saveRecipes(recipe: Recipe[]) {
    return this.http.post<any>(`${this.LINK}${this.endpoint}`, recipe);
  }

  fetchRecipes() {
    return this.http.get<any>(`${this.LINK}${this.endpoint}`);
  }
}
