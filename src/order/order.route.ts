import { OrderComponent } from './order.component';
import { Routes } from '@angular/router';
import { DishComponent } from './dish.component';

export const orderRoutes:Routes=[
    {path:"order",component:OrderComponent},
    {path:"order/menu",component:OrderComponent},
    {path:"order/dish",component:DishComponent}

]
