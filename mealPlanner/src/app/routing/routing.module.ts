import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{AllRecipesComponent} from '../all-recipes/all-recipes.component';
import {LoginComponent} from '../login/login.component';
import {MyplanComponent} from '../myplan/myplan.component';

const routes = [
  {
    path: '',
    component: AllRecipesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'plan',
    component: MyplanComponent
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
