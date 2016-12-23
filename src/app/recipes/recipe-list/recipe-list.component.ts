import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe';
// import { RecipeItemComponent } from './recipe-item.component';
// import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rb-recipe-list',
  templateUrl :  './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]  = [
    new Recipe('Brisket', 'Yummy', '//placehold.it/200x100',[]),
    new Recipe('Turkey', 'Nummy', '//placehold.it/200x100',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
