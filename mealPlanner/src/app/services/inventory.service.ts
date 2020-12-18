import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  url = 'http://localhost:8080/';
  ingredientList = [];
  recipeList=[];
  mealPlan=[];

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
  getMealPlan(){
    this.http.get(this.url+"mealplan/get/All").toPromise().then(data => {
      for (let key in data)
        if (data.hasOwnProperty(key))
          this.mealPlan.push(data[key])



    });
    return this.mealPlan;

  }


  postIngredient(ing){

    
    

    this.http.post(this.url+"ingredients/add",{
      ingredient_name: ing.ingredient_name,
      quantity_count: ing.quantity_count
    }).toPromise().then((data: any)=>{
      console.log(data)
      console.log(JSON.stringify(data.json))
    })

  }
  postIngredient2(data){

    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const body = {data};
    this.http.post(this.url+"ingredients/add",body,config).subscribe((result)=>{
      console.log("result",result)
    })

  }
  postRecipe2(recipeList){
    
    console.log(recipeList.recipe_name+" "+recipeList.ingredients)

  }
  postRecipe(recipeList){
    
    
    
    this.http.post(this.url+"recipe/add",{
      recipe_name: recipeList.recipe_name,
      ingredients: recipeList.ingredients
    }).toPromise().then((data: any)=>{
      console.log(data)
      console.log(JSON.stringify(data.json))
    })

  }
}
