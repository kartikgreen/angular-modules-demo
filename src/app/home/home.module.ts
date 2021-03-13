import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsModule } from '../shared/cards/cards.module';
import { MaterialModule } from '../shared/material/material.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CalculatorComponent
  ],
  exports: [
    HomeComponent,
    CalculatorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CardsModule,
  ]
})
export class HomeModule { }
