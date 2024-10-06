import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipesWelcomeComponent } from "./recipes/recipes-welcome/recipes-welcome.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipesWelcomeComponent},
            { path: '', component: RecipeListComponent },
            { path: ':id', component: RecipeDetailComponent},
        ]
    },
    {
        path: 'shopping-list', component: ShoppingListComponent, children: [
            { path: 'shopping-list', component: ShoppingListComponent },
        ]
    },
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}