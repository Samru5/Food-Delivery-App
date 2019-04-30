import { OrderComponent } from './order.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { orderRoutes } from './order.route';

@NgModule({
    declarations: [
      OrderComponent,
     
    
    ],
    imports: [
      BrowserModule,
      RouterModule.forChild(orderRoutes)
    ],
    providers: [],
    exports:[RouterModule]
})
export class OrderModule{

}
