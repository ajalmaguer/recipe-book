import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/'

@Injectable()
export class RecipeService {
	private recipes: Recipe[] = [
		new Recipe('Salad', 'Healhty, but boring', 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2014/6/11/1/FNM_070114-Shrimp-and-Avocado-Salad-Recipe_s4x3.jpg', [
			new Ingredient('Croutons', 1),
			new Ingredient('Lettuce', 100)
		]),
		new Recipe('Hot Dog', 'Woof', 'http://www.crbcsc.org/http://www.crbcsc.org/wp-content/uploads/2014/02/hot-dog-ftr.jpg', [])
	];

	constructor() {}

	getRecipes() {
		return this.recipes
	}

}
