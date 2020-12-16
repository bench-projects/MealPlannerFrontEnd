import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';


import { AppComponent } from './app.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { MyplanComponent } from './myplan/myplan.component';
import { LoginComponent } from './login/login.component';
import {StockManagementComponent} from './stock-management/stock-management.component'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {  MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';






@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    MyplanComponent,
    LoginComponent,
    StockManagementComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatToolbarModule ,
    MatBottomSheetModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
