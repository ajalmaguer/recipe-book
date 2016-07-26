import { provideRouter } from '@angular/router'
import { RecipesComponent } from './recipes'
import { ShoppingListComponent } from './shopping-list'

export const APP_ROUTES_PROVIDERS = [
	provideRouter([
		{ path: '', redirectTo: '/recipes', pathMatch: 'full' },
		{ path: 'recipes', component: RecipesComponent },
		{ path: 'shopping-list', component: ShoppingListComponent }
	])
]