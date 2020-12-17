import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  url = 'http://localhost:8080/';
  ingredientList = [];
  recipeList=[];

  constructor(private http: HttpClient) { }

  getIngredientList(){
    this.http.get(this.url+"ingredients/get/All").toPromise().then(data => {
      //console.log(data);

      for (let key in data)
        if (data.hasOwnProperty(key))
          this.ingredientList.push(data[key])



    });
    return this.ingredientList;
    
  }
  getRecipeList(){

    this.http.get(this.url+"recipe/get/All").toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.recipeList.push(data[key])



    });
    return this.recipeList;

  }
}
