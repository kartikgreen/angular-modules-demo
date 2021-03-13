import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsComponent } from './cards.component';



@NgModule({
  declarations: [
    CardsComponent
  ],
  exports: [
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
