import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InventoryService } from '../services/inventory.service';





@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent implements OnInit {



  ingredientList = [];
  pData = {
        
    "recipe_name": "Lmao",
    "ingredients": "22,6"
};

  log(x) { console.log(x) };

  ingredientsForm = new FormGroup({

    ingredientName: new FormControl('')

  });
 
  
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void{

    this.ingredientList = this.inventoryService.getIngredientList();

  }
  onSubmitIngredient(data){
    console.warn(data);
    this.inventoryService.postIngredient(data);
  }
  onSubmitRecipe(data){
    this.pData.recipe_name = data.recipe_name;
    this.pData.ingredients = data.ingredients.toString();;
    console.warn(this.pData);
    this.inventoryService.postRecipe(this.pData);
  }






}
