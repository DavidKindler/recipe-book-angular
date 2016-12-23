import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../ingredient';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[] = [
    new Ingredient('turkey',10),
    new Ingredient('brisket',20)
  ];
 
  constructor() { }

  ngOnInit() {
  }

}
