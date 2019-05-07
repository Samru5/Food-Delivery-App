import { Component } from '@angular/core';

@Component({
templateUrl:"./order.component.html",
styleUrls:["./order.component.css"]
})
export class OrderComponent{
    restaurants= 
    [
        {
            "id": 101,
            "name": "Suruchi Hotel",
            "address":"Mumbai",
   
            "rating": 3.2,
         
        },


        {
            "id": 102,
            "name": "Welcome Hotel",
            "address":"Thane",
            "rating": 4.2,
         
        }
    ];


   
    
}
