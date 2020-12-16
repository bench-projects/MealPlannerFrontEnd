import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';





@Component({
  selector: 'app-stock-management',
  templateUrl: './stock-management.component.html',
  styleUrls: ['./stock-management.component.scss']
})
export class StockManagementComponent  {

  
  log(x){console.log(x)};
  
  ingredientsForm = new FormGroup({

    ingredientName: new FormControl('')
    
  });
  dummyData:any=[
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"},
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"},
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"},
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"},
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"},
    {name:"aaa", quantity:"12"},
    {name:"aag", quantity:"12"},
    {name:"dfs", quantity:"12"},
    {name:"sdf", quantity:"12"},
    {name:"aahjhna", quantity:"12"}
  ];
  constructor(){
    console.log(this.dummyData);
  }

  
  

  
}
