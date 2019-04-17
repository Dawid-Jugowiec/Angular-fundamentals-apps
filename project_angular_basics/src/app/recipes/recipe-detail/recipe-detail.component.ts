import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

@Input() recipe:Recipe;


  // constructor(private shoppingListService: ShoppingListService) { }

  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    console.log(this.recipe.ingredients[0].name);
  }

  onAddToShoppingList(){

    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);


  //  const ingredientName = name;
  //  const ingredientAmount = 1;
  
  //  const newIngredient = new Ingredient(ingredientName,ingredientAmount);
  // this.shoppingListService.addIngredient(newIngredient);
  }

}
