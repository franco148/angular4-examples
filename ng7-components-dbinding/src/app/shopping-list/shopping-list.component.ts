import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from 'app/logging.service';
import * as fromShoppingList from './store/shopping-list.reducer';
import * as slActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];

  // ingredients: Ingredient[]; 
  ingredients: Observable<{ ingredients: Ingredient[]}>;
  private ingredientsChangeSub: Subscription;

  constructor(private loggingService: LoggingService,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.store.select('shoppingList').subscribe();
    
    // this.ingredients = this.slService.getIngredients();
    // this.ingredientsChangeSub = this.slService.ingredientsChanged
    //   .subscribe(
    //     (ingredients: Ingredient[]) => {
    //       this.ingredients = ingredients;
    //     }
    //   ); 
    
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit');
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new slActions.StartEdit(index));
  }

  ngOnDestroy() {
    if (this.ingredientsChangeSub) {
      this.ingredientsChangeSub.unsubscribe();
    }
  }

} 