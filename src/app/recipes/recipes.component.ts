import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe";
// import { RecipeListComponent } from './recipe-list/recipe-list.component';
// import { RecipeItemComponent } from './recipe-list/recipe-item.component';
// import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
