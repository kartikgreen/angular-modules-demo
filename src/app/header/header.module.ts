import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StickyModule } from '../shared/sticky/sticky.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StickyModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
