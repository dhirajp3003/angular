import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    
    addedIngredient = new Subject<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomato", 10)
      ];
    
    getIngredients(){
        return this.ingredients;
    }
    
    ingredientAdd(ingredient : Ingredient){
        this.ingredients.push(ingredient);
    }
    addIngredients(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
    }
}