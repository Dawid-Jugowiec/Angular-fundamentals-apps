import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable({providedIn: 'root'})
export class RecipeService {

constructor(private shoppingListService: ShoppingListService){};

    recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
         "Tasty schnitzel",
          "https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_960_720.jpg",
          [new Ingredient('Meat',1),
          new Ingredient('French Fries',20)]),
        new Recipe('Big Burget', 
        "Tasty Burger", 
        "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        [new Ingredient('Buns',2),
    new Ingredient('Meat',1)])
       
         ];


           getRecipes (){
               return this.recipes.slice();
           }



addIngredientToShoppingList(ingredients: Ingredient[]){

    
    this.shoppingListService.addIngredients(ingredients);
}

        }