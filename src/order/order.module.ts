import { OrderComponent } from './order.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { orderRoutes } from './order.route';
import { DishService } from './dish.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart.component';

@NgModule({
    declarations: [
      OrderComponent,
      CartComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forChild(orderRoutes),
      HttpClientModule
    ],
    providers: [DishService],
    exports:[RouterModule]
})
export class OrderModule{

}
