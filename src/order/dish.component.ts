import { Component } from '@angular/core';

@Component({
    templateUrl:"./dish.component.html"
    })
export class DishComponent{
   
   dishes = [
            {
                "dish1":"Dosa"
            },
            {
               "dish2":"Idli"
            },

            {
                "price1":50.00
            }
        ];

}