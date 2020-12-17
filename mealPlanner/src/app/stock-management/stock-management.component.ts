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
        
    "ingredient_name": "Grapes",
    "quantity_count": 8
};

  log(x) { console.log(x) };

  ingredientsForm = new FormGroup({

    ingredientName: new FormControl('')

  });
 
  
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void{

    this.ingredientList = this.inventoryService.getIngredientList();

  }
  onSubmit(data){
    console.warn(data);
    this.inventoryService.postIngredient(data);
  }






}
