import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
    declarations: [
        RecipeDetailComponent,
        RecipeListComponent,
        RecipesComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        RecipeStartComponent
    ],
    // The following error is shown: Can't bind to 'ngForOf' since it isn't a known property of 'li'. ("
    // First it was regarding to router-outlet, now it is because it can not find ngFor, this is
    // in BrowserModule, however it is not a good practice to have declared this module in many places,
    // So it can be used CommonModule.
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    // exports: [
    //     RecipeDetailComponent,
    //     RecipeListComponent,
    //     RecipesComponent,
    //     RecipeItemComponent,
    //     RecipeEditComponent,
    //     RecipeStartComponent
    // ]
})
export class RecipesModule {}