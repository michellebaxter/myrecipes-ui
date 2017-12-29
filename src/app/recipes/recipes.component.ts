import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];

  constructor() { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): Recipe[] {
    this.recipes = [
      { id: 1, name: 'Test Recipe 1' },
      { id: 2, name: 'Test Recipe 2' }
    ];
    return this.recipes;
  }
}
