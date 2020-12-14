import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';


import { AppComponent } from './app.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { MyplanComponent } from './myplan/myplan.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    MyplanComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
