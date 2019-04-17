import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;

// @Output () IngredientAdded = new EventEmitter<Ingredient>();


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

onAddItem()
{
  
  const ingName =this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient(ingName, ingAmount);
  this.shoppingListService.addIngredient(newIngredient);

//  this.IngredientAdded.emit(newIngredient);
}

}
