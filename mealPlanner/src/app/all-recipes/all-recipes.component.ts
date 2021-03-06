import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  recipeList =[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {

    this.recipeList = this.inventoryService.getRecipeList();
    console.log(this.recipeList);
  }
  

}
