import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '../header/header.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    HeaderModule
  ],
  exports: [
    HomeModule,
    HeaderModule
  ]
})
export class CoreModule { }
