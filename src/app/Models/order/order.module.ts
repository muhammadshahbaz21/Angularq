// order.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderRoutingModule } from '../../app.routes';
import { Router } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
})
export class OrderModule {
  
}
