import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent implements OnInit {

  constructor() { }
  
  ingredientsForm = new FormGroup({

    ingredientName: new FormControl('')
    
  });
  toppings = new FormControl();

  toppingList: string[] = ['cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  ngOnInit(): void {
  }
}
