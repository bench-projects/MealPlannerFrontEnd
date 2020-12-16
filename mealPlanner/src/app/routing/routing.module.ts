import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{AllRecipesComponent} from '../all-recipes/all-recipes.component';
import {LoginComponent} from '../login/login.component';
import {MyplanComponent} from '../myplan/myplan.component';
import {StockManagementComponent} from '../stock-management/stock-management.component'

const routes = [
  {
<<<<<<< Updated upstream
    path: '',
=======
    path: 'recipes',
>>>>>>> Stashed changes
    component: AllRecipesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'plan',
    component: MyplanComponent
  },
  {
    path: 'stock',
    component: StockManagementComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
