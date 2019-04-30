import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { OrderModule } from 'src/order/order.module';
import { WelcomeComponent } from './welcome.component';
import { DishComponent } from 'src/order/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DishComponent
    
    
  ],
  imports: [
    BrowserModule,
    OrderModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
