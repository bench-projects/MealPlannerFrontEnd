import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-myplan',
  templateUrl: './myplan.component.html',
  styleUrls: ['./myplan.component.scss']
})
export class MyplanComponent implements OnInit {
  
  mealList = [];
  recipeList =[];

  mondayy = new Array(3);

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.mealList = this.inventoryService.getMealPlan();
    this.recipeList = this.inventoryService.getRecipeList();
    //this.monday = this.mealList
    console.log(this.mealList);
    console.log(this.recipeList);
    

  }
  onSubmitplan(){

  }
  meals = new FormControl();

  

}
