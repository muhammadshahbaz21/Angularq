import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CancelOrderComponent } from './Models/order/components/cancel-order/cancel-order.component';
import { GetOrderComponent } from './Models/order/components/get-order/get-order.component';
import { PendingOrderComponent } from './Models/order/components/pending-order/pending-order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './Models/order/order/order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
export const routes: Routes = [
    {path:'get-order', component:GetOrderComponent},
    {path:'pending-order', component:PendingOrderComponent},
    {path:'cancel-order', component:CancelOrderComponent},
    {path: 'navbar', component:NavbarComponent},
    {path: 'order',component:OrderComponent}
];
@NgModule({
    
    imports: [RouterModule.forChild(routes),
        BrowserAnimationsModule,
        NoopAnimationsModule,
    ],
    exports: [RouterModule],
  })
  export class OrderRoutingModule {
    
  }
  