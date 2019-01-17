import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputRef : ElementRef ;
  @ViewChild('inputAmount') amountRef : ElementRef ;
  
  constructor(private shoppinglistService : ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingredient = new Ingredient(this.inputRef.nativeElement.value,this.amountRef.nativeElement.value)
    this.shoppinglistService.addedIngredient.next(ingredient);
  }
}
