import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe'
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Salad', 'Healhty, but boring', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2014/6/11/1/FNM_070114-Shrimp-and-Avocado-Salad-Recipe_s4x3.jpg', []),
		new Recipe('Hot Dog', 'Woof', 'http://www.crbcsc.org/http://www.crbcsc.org/wp-content/uploads/2014/02/hot-dog-ftr.jpg', [])
	];	
	@Output() recipeSelected = new EventEmitter<Recipe>();


	constructor() {}

	ngOnInit() {
	}

	onSelected(recipe: Recipe) {
		// console.log(recipe)
		this.recipeSelected.emit(recipe)
	}

}
