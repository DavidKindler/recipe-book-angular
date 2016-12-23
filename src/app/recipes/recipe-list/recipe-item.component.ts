import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe';
// import { RecipeListComponent } from './recipe-list.component';
// import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;

  constructor() { }

  ngOnInit() {
  }

}
